// import React, { useState, useCallback, useMemo, forwardRef } from "react";
// import styled, { css } from "styled-components";
// import Uploady, {
//   useBatchAddListener,
//   useBatchFinishListener,
//   useUploady
// } from "@rpldy/uploady";
// import { asUploadButton } from "@rpldy/upload-button";


// const inputCss = css`
//   width: 260px;
//   height: 30px;
//   line-height: 30px;
//   font-size: medium;
//   color: #000;
//   border: 1px solid #fff;
//   background-color: #f1f1f1;
//   margin-bottom: 10px;
//   box-sizing: border-box;
//   padding: 0 4px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   img {
//     margin-top: 10px;
//     max-width: 200px;
//     height: auto;
//     max-height: 200px;
//   }

//   input[type="text"],
//   input[type="number"] {
//     ${inputCss}
//   }
// `;

// const SubmitButton = styled.button`
//   height: 60px;
//   width: 260px;
//   font-size: large;
//   margin-top: 20px;
//   background-color: #101a2c;
//   border: 1px solid #4b5763;
//   color: #b0b1b3;
//   text-transform: uppercase;
//   cursor: pointer;
//   margin-bottom: 4px;

//   ${({ disabled }) =>
//     disabled
//       ? `
//     cursor: default;
//     background-color: #d8d2d2;
//     color: #444040
//   `
//       : ""}
// `;

// const UploadField = styled.div`
//   ${inputCss}

//   white-space: nowrap;
//   text-overflow: ellipsis;
//   overflow: hidden;

//   cursor: pointer;
// `;

// const MyUploadField = asUploadButton(
//   forwardRef(({ onChange, ...props }, ref) => {
//     const [text, setText] = useState("Select file");

//     useBatchAddListener((batch) => {
//       setText(batch.items[0].file.name);
//       onChange(batch.items[0].file.name);
//     });

//     useBatchFinishListener(() => {
//       setText("Select file");
//       onChange(null);
//     });

//     return (
//       <UploadField {...props} ref={ref} id="form-upload-button" title={text}>
//         {text}
//       </UploadField>
//     );
//   })
// );

// const MyForm = () => {
//   const [fields, setFields] = useState({});
//   const [fileName, setFileName] = useState(null);
//   const { processPending } = useUploady();

//   const onSubmit = () => processPending({ params: fields });

//   const onFieldChange = (e) => {
//     setFields({
//       ...fields,
//       [e.currentTarget.id]: e.currentTarget.value
//     });
//   };

//   const buttonExtraProps = useMemo(
//     () => ({
//       onChange: setFileName
//     }),
//     [setFileName]
//   );

//   return (
//     <Form>
//       <MyUploadField autoUpload={false} extraProps={buttonExtraProps} />
//       <br />
//       <input
//         onChange={onFieldChange}
//         id="field-name"
//         type="text"
//         placeholder="HERO, OR VILLIAN NAME?"
//       />
//       <br />
//       <input
//         onChange={onFieldChange}
//         id="abilities"
//         type="text"
//         placeholder="ABILITIES"
//       />
//       <br />
//       <SubmitButton
//         id="form-submit"
//         type="button"
//         onClick={onSubmit}
//         disabled={!fileName}
//       >
//         Submit Form
//       </SubmitButton>
//     </Form>
//   );
// };

// export default function CreatePlayer() {
//   return (
//     <div className="CreatePlayer">
//       <Uploady
//         clearPendingOnAdd
//         destination={{ url: "[upload-url]" }}
//         multiple={false}
//       >
//         <h3>Create Character</h3>
//         <MyForm />
//       </Uploady>
//     </div>
//   );
// }

import React, {useState} from 'react'
import ModalCreateNewPlayer from './ModalCreateNewPlayer.jsx'

const CreatePlayer = ()=> {
  const [newPlayer, setNewPlayer] = useState(false)
  return (
    <div>
      <button onClick={()=>setNewPlayer(true)}>CREATE CHARACTER</button>
      <ModalCreateNewPlayer newPlayer={newPlayer} setNewPlayer={setNewPlayer}/>
    </div>
  )
}

export default CreatePlayer;
