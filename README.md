# StatesandCapitals

Summary of States and Capitols Project (include this in documentation):

1. This project will implement use cases for two actors; Student and Teacher.
2. Students will engage the software in two ways; learning mode and testing mode.
	Learning Mode:
A.  While engaging the software in learning mode, the student will interact with an image map of the United States.  Each state within the composite picture of the United States will be associated with a separate hotspot that provides a link to a page showing a picture of the individual state along with summary information.
B. Summary information on each state page will be built dynamically and include
	State Name >> Obtained directly from JSON File
	State Capitol >> Obtained directly from JSON File
	State Population >> Obtained directly from JSON File
	State Area >> Obtained directly from JSON File
	State Population Density >> Derived from JSON File

	Testing Mode:

A. While engaging the software in testing mode, the student will be presented with dynamically created pages showing a map of the individual state and textboxes where the student will enter the state name and state capitol.

B. After entering the textbox data, the student will submit the form, the software will check the input data for correctness (to include proper capitalization), tabulate the results, and randomly* present the next state form – this process will repeat forty nine times.

C. After data is processed for all fifty states, the software will display results in tabular format on the same page and then write summary results to local storage.  The stored data will include the student name (obtained from a login form) and percent correct.

3. Teachers will engage the software two ways; generate a summary report from local storage and clear local storage.  

4. In addition to the pages needed to implement use cases for the two actors (student and teacher), the project will provide additional documentation pages.  A quick summary follows:

	A. Context Diagram
	B. Use case diagrams with linked use case narratives – use image maps.

