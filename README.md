# ShadCN Natural Language DateTime Input

A powerful and intuitive ShadCN/UI component that allows users to input dates and times using natural language expressions like "tomorrow", "next Monday at 3pm", or "in 2 hours". Built with chrono-node for robust natural language parsing and designed to seamlessly integrate with existing ShadCN/UI projects.

https://iloveitaly.github.io/shadcn-natural-language-datetime-input

## Changes From Lingua Time Picker

[This project is based on Lingua Time Picker.](https://linguatime.nainglinnkhant.com)

The updated `DateTimePicker` and `DateTimePickerPopover` components introduce some changes from the original project:

1. **Customizable Time Picker Display**: A new `showTimePicker` prop lets you toggle the time picker on or off, allowing the component to be used for date-only or date-and-time inputs based on your needs.

2. **Flexible Date Formatting**: The `dateTimeFormatFunction` prop enables custom date formatting, so you can control how dates appear (e.g., "MMM do yyyy" for dates or "MMM do yyyy, hh:mm a" for date-time).

3. **Tailorable Suggestions**: The `suggestions` prop allows you to provide a custom list of default suggestions (e.g., "Tomorrow", "Next Sunday"), replacing the hardcoded defaults, making the natural language input more relevant to your application.

4. **Smoother State Synchronization**: Enhanced handling ensures the input text always matches the selected date, preventing mismatches when choosing dates via the picker or typing natural language.

5. **Improved Suggestion System**: Suggestions update in real-time as you type, prioritizing default suggestions and falling back to parsed inputs (via `chrono-node`), offering a more intuitive natural language experience.

6. **Better Keyboard Navigation**: Arrow keys, Enter, and Escape now work seamlessly in the suggestion dropdown, improving accessibility for keyboard-only users.

7. **Polished UI and Accessibility**: The suggestion dropdown features smoother animations and proper ARIA attributes, enhancing the visual experience and screen reader compatibility.
