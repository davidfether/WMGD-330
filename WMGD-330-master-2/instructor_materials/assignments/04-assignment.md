# Assignment - 04 | CSS Grids and Media Queries

## Requirements:

The goal is to replicate this screenshot [here](https://github.com/mrpaulphan/WMGD-330/blob/master/instructor_materials/assets/grid-example.png). The starter fille will be a starting point for your HW.

1. Download the current repo and copy the `examples/assignments/04-starter-files` files into your own folder. Go into Codekit and import this folder as a new "project". Use this is a starter for your HW.
2. Add new HTML markup to the `index.kit` file to match the "Author" section in this [screenshot](https://github.com/mrpaulphan/WMGD-330/blob/master/instructor_materials/assets/grid-example.png). Apply CSS to the new HTML markup to have the Author block span across 3/4 columns.
3. Break out the existing html markup into it's own `.kit` files and import them into your main `index.kit`. You should have a `header.kit`, `main-content.kit`, `author.kit`, `footer.kit`
4. Write unique CSS for **each** column at all three breakpoints. For example,

```
   .header {
	  background-color: $blue;

   	@include sm {
   		background-color: $green;
   	}
   	@include md {
   		background-color: $purple;
   		text-align: left;
   	}
   	@include lg {
   		background-color: $red;
   	}
}
```

For any new colors your introduce, please add a new variable in the `helper/_variables.scss` file.

5. Push Your code to Github and send a link on learn.

## Submission

Submit your github link to blackboard under "Assignment 04".

Submission example

```
Github: {github-link-to-your-hw-folder}
```
