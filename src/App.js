import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';

const App = () => { 
       return (
           <div className="App">
               <h2>Using CKEditor 5 build in React</h2>
               <CKEditor
                   editor={ Editor }
                   data="<p>Hello from CKEditor 5!</p><div class='test'>sdfsdfsdf</div>"
                   onReady={ editor => {
                       // You can store the "editor" and use when it is needed.
                       console.log( 'Editor is ready to use!', editor );
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