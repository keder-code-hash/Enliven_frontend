// import React, { Component } from 'react'

// class Quill extends Component{
//     state ={editorRef:null};
//     render(){
//         return (
//             <React.Fragment>
//                 <Editor
//                     tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
//                     onInit={(evt, editor) => this.setState(state=>({editorRef:editor}))}
//                     initialValue='<p>This is the initial content of the editor.</p>'
//                     init={{
//                     height: 500,
//                     menubar: false,
//                     plugins: [
//                         'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
//                         'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
//                         'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
//                     ],
//                     toolbar: 'undo redo | blocks | ' +
//                         'bold italic forecolor | alignleft aligncenter ' +
//                         'alignright alignjustify | bullist numlist outdent indent | ' +
//                         'removeformat | help',
//                     content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
//                     }}
//                 />
//                 <button onClick={log}>Log editor content</button>
//             </React.Fragment>
//         )
//     }
// }

// // export default Quill;