import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector'; 

const App = () => { 
       return (
           <div className="App">
               <h2>Using CKEditor 5 build in React</h2>

               <CKEditor
                   editor={ Editor }
                   data='
                   <p>This is a simple box:</p>
       
                   <section class="simple-box">
                       <h1 class="simple-box-title">Box title</h1>
                       <div class="simple-box-description">
                           <p>The description goes here.</p>
                           <ul>
                               <li>It can contain lists,</li>
                               <li>and other block elements like headings.</li>
                           </ul>
                       </div>
                   </section>
               '
                   onReady={ editor => {
                       // You can store the "editor" and use when it is needed.
                       console.log( 'Editor is ready to use!', editor );
                       CKEditorInspector.attach( 'editor', editor );
                   } }
                   onChange={ ( event, editor ) => {
                       const data = editor.getData();
                       console.log( { event, editor, data } );
                   } }
                   onBlur={ ( event, editor ) => {
                       console.log( 'Blur.', editor );
                   } }
                   onFocus={ ( event, editor ) => {
                       console.log( 'Focus.', editor );
                   } }
               />
           </div>
       );   
}
export default App;