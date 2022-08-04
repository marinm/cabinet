const MAX_URL_LENGTH = 50;
const MAX_LABEL_LENGTH = 50;

$('#links-list').sortable({
    axis: 'y',
    placeholder: 'sortable-placeholder',
    handle: '.grip',
    tolerance: 'pointer'
});


const dummy_list = [
    {
        "text": "Browser Extensions",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions"
    },
    {
        "text": "What are extensions?",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions"
    },
    {
        "text": "Your first extension",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension"
    },
    {
        "text": "Your second extension",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension"
    },
    {
        "text": "Anatomy of an extension",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension"
    },
    {
        "text": "Example extensions",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Examples"
    },
    {
        "text": "What next?",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/What_next_"
    },
    {
        "text": "Using the JavaScript APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Using_the_JavaScript_APIs"
    },
    {
        "text": "Content scripts",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts"
    },
    {
        "text": "Background scripts",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Background_scripts"
    },
    {
        "text": "Match patterns",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns"
    },
    {
        "text": "Working with files",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Working_with_files"
    },
    {
        "text": "Internationalization",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization"
    },
    {
        "text": "Content Security Policy",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy"
    },
    {
        "text": "Native messaging",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_messaging"
    },
    {
        "text": "Differences between API implementations",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations"
    },
    {
        "text": "Chrome incompatibilities",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities"
    },
    {
        "text": "User Interface",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface"
    },
    {
        "text": "Toolbar button",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action"
    },
    {
        "text": "Address bar button",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions"
    },
    {
        "text": "Sidebars",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars"
    },
    {
        "text": "Context menu items",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items"
    },
    {
        "text": "Options page",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages"
    },
    {
        "text": "Extension pages",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages"
    },
    {
        "text": "Notifications",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications"
    },
    {
        "text": "Address bar suggestions",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox"
    },
    {
        "text": "Developer tools panels",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels"
    },
    {
        "text": "Intercept HTTP requests",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests"
    },
    {
        "text": "Modify a web page",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page"
    },
    {
        "text": "Insert external content",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page"
    },
    {
        "text": "Share objects with page scripts",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts"
    },
    {
        "text": "Add a button to the toolbar",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar"
    },

    {
        "text": "Implement a settings page",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page"
    },
    {
        "text": "Work with the Tabs API",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API"
    },
    {
        "text": "Work with the Bookmarks API",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API"
    },
    {
        "text": "Work with the Cookies API",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API"
    },
    {
        "text": "Work with contextual identities",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities"
    },
    {
        "text": "Interact with the clipboard",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard"
    },
    {
        "text": "Build a cross-browser extension",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension"
    },
    {
        "text": "Firefox differentiators",
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Firefox_differentiators"
    },
    {
        "text": "VS Code - repeat lines",
        "url": "https://www.codegrepper.com/code-examples/whatever/how+to+repeat+lines+in+vscode+%2A"
    },
];


function chop(str) {
    return str.substring(0, MAX_URL_LENGTH);
}

function chop_label(label) {
    const ellipses = (label.length > MAX_LABEL_LENGTH) ? '...' : '';
    return label.substring(0, MAX_LABEL_LENGTH) + ellipses;
}

function hostname(url) {
    const parsed = new URL(url);
    return parsed.hostname;
}

for (const item of dummy_list) {
    $('#links-list').append(`
        <li class="link-container">   
            <div class="link-title-and-domain">
                <span class="hostname">${hostname(item.url)}</span>
                <a href="${item.url}" class="link">${chop_label(item.text)}</a>
            </div>
            
            <i class="fa-solid fa-grip-lines grip"></i>
            <i class="fas fa-times icon-delete"></i>
        </li>
    `);
}