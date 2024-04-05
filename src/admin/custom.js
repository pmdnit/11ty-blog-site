const MarkdownControlWithFontSize = ({ onChange, forID, value }) => {
  const handleFontSizeChange = (event) => {
    // Insert Markdown syntax for font size adjustment based on user input
    const fontSizeValue = event.target.value;
    const markdownSyntax = `<span style="font-size: ${fontSizeValue};">${value}</span>`;
    onChange(markdownSyntax);
  };

  return (
    <div>
      <select onChange={handleFontSizeChange}>
        <option value="12px">Small</option>
        <option value="16px">Medium</option>
        <option value="20px">Large</option>
      </select>
      <textarea id={forID} value={value} onChange={e => onChange(e.target.value)} />
    </div>
  );
};

// Register the custom Markdown editor widget with font size option
CMS.registerWidget('markdownWithFontSize', MarkdownControlWithFontSize);