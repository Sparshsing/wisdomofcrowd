export default function Privacy() {
  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Privacy Policy for Token Counter Extension
        </h1>
        <p className="text-gray-600 dark:text-gray-400 italic mb-6">
          Last Updated: January 28, 2025
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Thank you for using the Token Counter extension. Your privacy is important to us. This Privacy Policy explains how we handle your data.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Data Collection</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
          <li>The Token Counter extension does not collect, store, or transmit any user data.</li>
          <li>The extension processes the selected text locally on your device to calculate token and word counts. No data is sent to external servers.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Permissions</h2>
        <p className="mb-2 text-gray-700 dark:text-gray-300">The extension uses the following permissions:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
          <li><strong>activeTab:</strong> To access the selected text on the active tab.</li>
          <li><strong>contextMenus:</strong> To provide a right-click menu for token and word count calculations.</li>
          <li><strong>host_permissions:</strong> To enable functionality on all websites.</li>
          <li><strong>scripting:</strong> To calculate and display the results on the active tab.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Third-Party Libraries</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          The extension uses the tiktoken library for tokenization. This library operates locally and does not transmit data.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Security</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          We do not store any data or interact with external servers. All processing happens locally on your device.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Changes to this Policy</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          We may update this Privacy Policy periodically. The latest version will always be available here.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Contact</h2>
        <p className="text-gray-700 dark:text-gray-300">
          If you have any questions or concerns, please contact us at <a href="mailto:sparshsing96@email.com" className="text-purple-600 dark:text-purple-400 hover:underline">sparshsing96@email.com</a>.
        </p>
      </div>
    </div>
  );
} 