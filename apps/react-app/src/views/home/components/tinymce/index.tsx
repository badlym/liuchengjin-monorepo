// import { Editor, IAllProps } from '@tinymce/tinymce-react';
// import { Tooltip } from 'antd';
// import React, { useRef, useState } from 'react';
// import type { Editor as tinymceEditor } from 'tinymce';
//
// import './index.css';
//
// export default function Tinymce() {
//   const editorRef = useRef<tinymceEditor | null>(null);
//   const log = () => {
//     if (editorRef.current) {
//       changeColorOfSpecificText();
//     }
//   };
//   const [tooltipVisible, setTooltipVisible] = useState(false);
//   const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
//   // 显示 Tooltip
//   const hanldleSelectChange: IAllProps['onSelectionChange'] = (e) => {
//     console.log(e);
//     if (!editorRef.current) return;
//     const editor = editorRef.current;
//     const selection = editor.selection.getRng();
//
//     if (!selection.collapsed) {
//       const rect = selection.getBoundingClientRect();
//       setTooltipPosition({ x: rect.left, y: rect.top });
//       setTooltipVisible(true);
//     } else {
//       setTooltipVisible(false);
//     }
//   };
//   const handleEditorChange: IAllProps['onEditorChange'] = (value, editor) => {
//     console.log(value);
//     console.log(editor.getContent());
//     console.log(
//       editor.getContent({
//         format: 'text',
//       }),
//     );
//     setValue(value);
//   };
//
//   function changeColorOfSpecificText() {
//     editorRef.current?.undoManager.transact(() => {
//       // 使用事务确保可以撤销操作
//       const content = editorRef.current?.getContent({ format: 'text' });
//       // 使用正则表达式找到文本并添加颜色样式
//       const updatedContent = content?.replace(
//         new RegExp(`床前明月光`, 'gi'),
//         `<span style="color: red;">床前明月光</span>`,
//       );
//       editorRef.current?.setContent(updatedContent as string);
//     });
//   }
//   const [value, setValue] = useState('床前明月光,\n疑是地上霜.');
//   return (
//     <>
//       <Tooltip
//         title="Options or Actions"
//         open={tooltipVisible}
//         placement="top"
//         getPopupContainer={(triggerNode) => triggerNode.parentElement || document.body}
//       >
//         <div
//           style={{
//             position: 'fixed',
//             width: '1px',
//             height: '1px',
//             zIndex: -1,
//             left: tooltipPosition.x,
//             top: tooltipPosition.y,
//           }}
//         />
//       </Tooltip>
//
//       <Editor
//         value={value}
//         onEditorChange={handleEditorChange}
//         id={'edit'}
//         inline
//         tinymceScriptSrc={'/tinymce/tinymce.min.js'}
//         onInit={(evt, editor) => {
//           editorRef.current = editor;
//         }}
//         onSelectionChange={hanldleSelectChange}
//         init={{
//           resize: false,
//           height: '500px',
//           min_height: 200,
//           menubar: false,
//           language: 'zh_CN',
//           // plugins: [
//           //   'autolink',
//           //   'codesample',
//           //   'link',
//           //   'lists',
//           //   'media',
//           //   'table',
//           //   'image',
//           //   'quickbars',
//           //   'codesample',
//           //   'help',
//           // ],
//           toolbar: false,
//           branding: false,
//         }}
//       />
//       <button onClick={log}>Log editor content</button>
//     </>
//   );
// }
