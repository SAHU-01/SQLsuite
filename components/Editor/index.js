import { useState, useEffect } from "react";

export default function Editor({ currentTheme, setBody }) {
  const [value, setValue] = useState(`-- Online SQL Editor to Run SQL Online.
-- Use the editor to create new tables, insert data and all other SQL operations.
      
SELECT first_name, last_name, age  FROM CurrentTable;`),
    [AceEditor, setAceEditor] = useState(null);

  useEffect(() => {
    setAceEditor(() => require("react-ace").default);
    require("ace-builds/src-noconflict/mode-mysql");
    require("ace-builds/src-noconflict/theme-dracula");
    require("ace-builds/src-noconflict/theme-cloud9_day");
    require("ace-builds/src-noconflict/ext-language_tools");
  }, []);

  useEffect(() => {
    setBody((prev) => ({ ...prev, code: value }));
  }, [value]);

  return (
    <div className="max-w-screen-xl mx-auto h-full w-full">
      <div className="h-full w-full">
        {AceEditor && (
          <AceEditor
            mode="mysql"
            theme={currentTheme === "dark" ? "dracula" : "cloud9_day"}
            onChange={(e) => setValue(e)}
            name="DARK_EDITOR"
            height="100%"
            width="100%"
            fontSize={24}
            showPrintMargin={false}
            value={value}
            displayIndentGuides={false}
            editorProps={{ $blockScrolling: true }}
          />
        )}
      </div>
    </div>
  );
}
