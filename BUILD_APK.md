# How to Build the Android APK

You can build the APK using the terminal without opening Android Studio.

## Prerequisites

-   **Java 17** (Required for the current Gradle version).
-   **Android SDK** installed and configured in your path (or via `ANDROID_HOME`).

## Build Command

1.  Open a terminal in the project folder.
2.  Navigate to the `android` directory:
    ```bash
    cd android
    ```
3.  Run the build command:
    ```bash
    ./gradlew assembleDebug
    ```
    *Note: The first time you run this, it may take a few minutes to download Gradle and dependencies.*

## Locate the APK

Once the build is successful ("BUILD SUCCESSFUL"), you can find your APK file here:

```
android/app/build/outputs/apk/debug/app-debug.apk
```

## Install on Device

To install the APK directly to a connected device:

1.  Connect your Android phone via USB.
2.  Run:
    ```bash
    ./gradlew installDebug
    ```

## Updating the App

If you make changes to `index.html` in the `www` folder:
1.  Go back to the project root:
    ```bash
    cd ..
    ```
2.  Sync the changes to the Android project:
    ```bash
    npx cap sync
    ```
3.  Re-build the APK:
    ```bash
    cd android
    ./gradlew assembleDebug
    ```
