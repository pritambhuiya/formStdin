# TODO
  - [ ] Implement validation
    - [ ] Length of name should be greater than 5
    - [ ] Dob should be in yyyy-mm-dd format
    - [ ] Atleast one hobby should be present
  - [ ] Pass console.log from outside
  - [ ] Write responses in json
    - [ ] Hobbies should be in array with comma seperated 
    - [ ] Pass fs.writeFile.sync from outside
    - [ ] Keep it in callBack
  - [ ] Remove third-party dependencies
    - [ ] Mock console.log 
    - [ ] Mock the callBack of fs.writeFileSync
  - [ ] Implement phone number field
  - [ ] Implement address field
  - [ ] Refactor registerResponses function
  - [ ] Keep stdin seperate from other problems.
  - [ ] Indirect files for validation of readResponses

# CONSIDER

# DONE
  - [x] Extract readResponses function from stdin
  - [x] Extract main in main.js
  - [x] Wire up class Form and Field to registerResponse
  - [x] Extract getAllResponses method in Form
  - [x] Extract getName method in Field
  - [x] Extract setResponse method in Field
  - [x] Extract fillField method in Form
  - [x] Extract main function
  - [x] Extract createForm function
  - [x] Extract getCurrentPrompt method in Form
  - [x] Extract submittedAllResponses method in Form
  - [x] Extract getPrompt method in Field
  - [x] Extract getResponse method in Field
  - [x] Create a class for form
  - [x] Create a class for field
    - [x] Have three properties - name, prompt, response
  - [x] Store responses and show once all inputs are accepted
  - [x] Create registerResponses.js
  - [x] Take input form stdin
  - [x] Take input for three times only 
  - [x] Display `thank you` and close the input stream
  - [x] Create a README.md
  - [x] Copy .eslintrc.json into root directory
  - [x] Verify mocha exists
  - [x] Create directory structure
