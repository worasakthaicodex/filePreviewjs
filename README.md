
FilePreview.js: Enhance File Uploads with Image Previews

Key Features:

1.Image Previews: FilePreview.js offers the ability to display image previews for selected files before they are uploaded. This feature helps users verify the content of their files.

2.Enhanced User Experience: By providing visual feedback through image previews, users can easily confirm their file selections and reduce the chances of errors during the upload process.

3.Customizable Styling: You can customize the appearance of the file input elements and image previews to match the design of your website.

4.Easy Integration: FilePreview.js can be easily integrated into your existing web forms and file upload components. It works seamlessly with HTML and JavaScript.

How to Use FilePreview.js:


1.Include the FilePreview.js  FilePreview.css  and jquery.min.js   library in your HTML file:

<pre>
<code>
<script src="file-preview.js"></script>

<link rel="stylesheet" href="filePreviewjs.css">

<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js'></script> 
</pre>
</code>


2.Create a file input element in your HTML:
<pre>
<code>

<span id="divflie1"></span>
</pre>
</code>
3.Initialize FilePreview.js forid:
<pre>
<code>
<script >
	  $('#divflie1').filePreviewjs({
	  fileid:1,
	  fileurl:"${path}/${advertise.uploadFile1}", \n
	  }); 
	
</script>
</pre>
</code>
"fileid" should be assigned a numeric value starting from 1 and increasing incrementally.
"fileurl" should be set to the URL of the file previously uploaded, if available.


4.When receiving the input file through a POST request, you should expect:

file as the name of the newly uploaded file.
oldfiles as the name of the previously uploaded file.
For example:

<pre>
<code>
<script>
  $('#divflie1').filePreviewjs({
    fileid: 1,
    fileurl: "${path}/${uploadFile1}",
  });
</script>

#PHP
<?php
$_FILES['file1'];
$_FILES['oldfiles1'];
?>

#๋๋JAVA
@RequestParam (value = "file1", required=false)  CommonsMultipartFile file1,
@RequestParam (value = "oldfiles1", required=false)  CommonsMultipartFile oldfiles1,
</pre>
</code>
