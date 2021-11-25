import '../../src/App.css';
import 'antd/dist/antd.css';
// import Content from './pages/content';

import { withTheme } from '@rjsf/core';
// AntDesign Theme
import { Theme as AntDTheme } from '@rjsf/antd';
//Material UI theme
// import { Theme as MaterialUITheme } from '@rjsf/material-ui';

const Form = withTheme(AntDTheme);
// const Form = withTheme(MaterialUITheme);
const Schema = {
  "title": "A registration form",
  "description": "A simple form example.",
  "type": "object",
  "required": [
    "firstName",
    "lastName"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First name",
      "default": "Chuck"
    },
    "lastName": {
      "type": "string",
      "title": "Last name"
    },
    "telephone": {
      "type": "string",
      "title": "Telephone",
      "minLength": 10
    }
  }
};
 const uiSchema = {
  "firstName": {
    "ui:autofocus": true,
    "ui:emptyValue": "",
    "ui:autocomplete": "family-name"
  },
  "lastName": {
    "ui:emptyValue": "",
    "ui:autocomplete": "given-name"
  },
  "age": {
    "ui:widget": "updown",
    "ui:title": "Age of person",
    "ui:description": "(earthian year)"
  },
  "bio": {
    "ui:widget": "textarea"
  },
  "password": {
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!"
  },
  "date": {
    "ui:widget": "alt-datetime"
  },
  "telephone": {
    "ui:options": {
      "inputType": "tel"
    }
  }
};
const log = (type) => console.log.bind(console, type);

function Content() {
  return (
    <div className="content">
      <Form className="content-form"
        schema={Schema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
        uiSchema={uiSchema}
      />

    </div>
  );
}

export default Content;
