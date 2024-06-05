#include <windows.h>
#include <string>

LRESULT CALLBACK WindowProcedure(HWND, UINT, WPARAM, LPARAM);

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
    // Registrera fönsterklassen
    const wchar_t CLASS_NAME[] = L"Sample Window Class";

    WNDCLASS wc = { };

    wc.lpfnWndProc = WindowProcedure;
    wc.hInstance = hInstance;
    wc.lpszClassName = CLASS_NAME;

    RegisterClass(&wc);

    // Skapa fönstret
    HWND hwnd = CreateWindowEx(
        0,
        CLASS_NAME,
        L"Sample Window",
        WS_OVERLAPPEDWINDOW,
        CW_USEDEFAULT, CW_USEDEFAULT, 800, 600,
        NULL,
        NULL,
        hInstance,
        NULL
    );

    if (hwnd == NULL) {
        return 0;
    }

    ShowWindow(hwnd, nCmdShow);

    // Huvudloop
    MSG msg = { };
    while (GetMessage(&msg, NULL, 0, 0)) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }

    return 0;
}

LRESULT CALLBACK WindowProcedure(HWND hwnd, UINT message, WPARAM wParam, LPARAM lParam) {
    switch (message) {
        case WM_CREATE: {
            // Skapa menyn
            HMENU hMenu = CreatePopupMenu();
            AppendMenu(hMenu, MF_STRING, 1, L"Open Website");

            // Lägg till menyn i högerklicksmenyn för Utforskaren
            HKEY hKey;
            RegCreateKeyEx(HKEY_CLASSES_ROOT, L"Directory\\Background\\shell\\OpenWeb", 0, NULL, REG_OPTION_NON_VOLATILE, KEY_WRITE, NULL, &hKey, NULL);
            RegSetValueEx(hKey, L"", 0, REG_SZ, (LPBYTE)L"Open Website", (wcslen(L"Open Website") + 1) * sizeof(wchar_t));
            RegCloseKey(hKey);

            RegCreateKeyEx(HKEY_CLASSES_ROOT, L"Directory\\Background\\shell\\OpenWeb\\command", 0, NULL, REG_OPTION_NON_VOLATILE, KEY_WRITE, NULL, &hKey, NULL);
            std::wstring command = L"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe https://feue.webber.se";
            RegSetValueEx(hKey, L"", 0, REG_SZ, (LPBYTE)command.c_str(), (command.size() + 1) * sizeof(wchar_t));
            RegCloseKey(hKey);

            return 0;
        }

        case WM_COMMAND: {
            switch (LOWORD(wParam)) {
                case 1: {
                    // Öppna webbadressen när menyn väljs
                    ShellExecute(NULL, L"open", L"https://feue.webber.se", NULL, NULL, SW_SHOWNORMAL);
                    break;
                }
            }
            return 0;
        }

        case WM_DESTROY: {
            PostQuitMessage(0);
            return 0;
        }

        default:
            return DefWindowProc(hwnd, message, wParam, lParam);
    }
}
