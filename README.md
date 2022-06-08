> A form accepting inputs from **stdin**. <br>
 Displaying, **thank you** when fields are filled. <br>
 Finally stored these responses in responses.json.<br>
 Displaying **invalid response** if wrong input found and again accepting that input.

* Prompts 
  * Enter name :
  * Enter dob(yyyy-mm-dd) :
  * Enter hobbies :
  * Enter phone Number :
  * Enter address Line 1 :
  * Enter address Line 2 :

* Validations
  * Name should have at least 5 characters
  * Dob should be in yyyy-mm-dd format
  * Hobbies should not be empty 
  * Phone number - Should have 10 characters

* Json format
  * Name as string
  * Dob as string
  * Hobbies as comma seperated array
  * Phone number as string
  * Address as string with newLine char seperated