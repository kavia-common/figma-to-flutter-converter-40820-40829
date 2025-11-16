# Figma to Flutter Mobile Frontend

This is a minimal Flutter scaffold to ensure the mobile container builds successfully and is ready for future Figma-to-Flutter screen integrations.

## Structure

- `lib/main.dart` — Required Flutter entry point.
- `lib/app.dart` — Root widget with `MaterialApp`, a basic `home` scaffold, and placeholder routes.
- `pubspec.yaml` — Valid Flutter project configuration with Material icons enabled.
- `analysis_options.yaml` — Static analysis configuration using `flutter_lints`.

## Run

Ensure Flutter SDK is installed, then from the `mobile_frontend` directory:

```bash
flutter pub get
flutter run
```

## Extend

- Add new screens under `lib/` and register routes in `FigmaToFlutterApp.routes`.
- Keep code minimal and clean; no external services are integrated by default.
