import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mobile_frontend/app.dart';

void main() {
  testWidgets('App builds and shows placeholder text', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const MobileFrontendApp());

    // Verify placeholder text is present.
    expect(find.text('Flutter app is set up successfully.'), findsOneWidget);

    // Basic sanity check: there is a Scaffold in the tree.
    expect(find.byType(Scaffold), findsOneWidget);
  });
}
