import 'package:flutter_test/flutter_test.dart';
import 'package:mobile_frontend/main.dart';

void main() {
  testWidgets('App renders HtmlListPage', (WidgetTester tester) async {
    await tester.pumpWidget(const MyApp());
    // Verify the list screen title exists
    expect(find.text('HTML Screens Preview'), findsOneWidget);
  });
}
