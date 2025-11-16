import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('Smoke test: MaterialApp builds and shows a text', (WidgetTester tester) async {
    // Build a minimal app for testing purposes.
    await tester.pumpWidget(
      const MaterialApp(
        home: Scaffold(
          body: Center(child: Text('Hello Test')),
        ),
      ),
    );

    // Verify a text is found.
    expect(find.text('Hello Test'), findsOneWidget);
  });
}
