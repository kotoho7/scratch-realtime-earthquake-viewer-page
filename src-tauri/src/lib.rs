use tauri::{
    menu::{Menu, MenuEvent, MenuItem},
    tray::{MouseButton, TrayIcon, TrayIconBuilder, TrayIconEvent},
    App, AppHandle, Manager, Window, WindowEvent,
};

fn show_window(app: &AppHandle) {
    if let Some(window) = app.get_webview_window("main") {
        let _ = window.show();
        let _ = window.set_focus();
    }
}

fn handle_tray_menu_event(app: &AppHandle, event: MenuEvent) {
    match event.id.as_ref() {
        "show" => show_window(app),
        "quit" => app.exit(0),
        _ => {}
    }
}

fn handle_tray_icon_event(tray: &TrayIcon, event: TrayIconEvent) {
    if let TrayIconEvent::DoubleClick {
        button: MouseButton::Left,
        ..
    } = event
    {
        show_window(&tray.app_handle());
    }
}

fn setup_system_tray(app: &mut App) -> Result<(), Box<dyn std::error::Error>> {
    let show_item = MenuItem::with_id(app, "show", "ウィンドウを表示", true, None::<&str>)?;
    let quit_item = MenuItem::with_id(app, "quit", "終了", true, None::<&str>)?;
    let menu = Menu::with_items(app, &[&show_item, &quit_item])?;

    let _tray = TrayIconBuilder::new()
        .tooltip("リアルタイム地震ビューアー")
        .icon_as_template(false)
        .icon(app.default_window_icon().unwrap().clone())
        .menu(&menu)
        .show_menu_on_left_click(false)
        .on_menu_event(handle_tray_menu_event)
        .on_tray_icon_event(handle_tray_icon_event)
        .build(app)?;

    Ok(())
}

fn handle_window_event(window: &Window, event: &WindowEvent) {
    if let WindowEvent::CloseRequested { api, .. } = event {
        let _ = window.hide();
        api.prevent_close();
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_http::init())
        .plugin(tauri_plugin_window_state::Builder::new().build())
        .setup(setup_system_tray)
        .on_window_event(handle_window_event)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
