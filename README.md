## JSON editor

This is a simple and very basic JSON editor. It was created by me to test my abilities with JSON data processing and file uploading, as well as features like "drag-n-drop".
This app has few options - you can create a new file to put your data in, or upload an existing file and edit it. You can also delete data from it by pressing a corresponding icon.
You can save your changes and the app will ask you to download a file with new changes. The app does not have an automatic saving(yet), so it is advised to save often.

Keep in mind that since it's a very basic app, it only understands the following structure:

```
[
  {
    id:numeric,
    name:string,
    surname:string,
    bio:string
  },
  {
    id:numeric,
    name:string,
    surname:string,
    bio:string
  },
  {
    ...
  }
]

```

**! There is an issue when user drags a file to the drop area, the hover pseudoclass does not trigger, thus the appearance of the drop area doesn't change. 
Currently there is no fix for that as there is seemingly no reason for it to not work.**

! _This is not a final version of the app, so more QoL features like data validation will be added soon._ 
