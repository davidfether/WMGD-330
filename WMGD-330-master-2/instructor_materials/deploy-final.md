# Deploy your final

- Sign up for [netlify](https://www.netlify.com/?utm_source=google&utm_medium=paid_search&utm_campaign=12755510784&adgroup=118788138897&utm_term=netlify&utm_content=kwd-371509120223&creative=514583565825&device=c&matchtype=e&location=9007308&gclid=Cj0KCQjw4PKTBhD8ARIsAHChzRKmojnmikal8k0-VppaE7wUH7_3kKUpKigX2jLQ6NPLz6uHoHePNrgaAmWkEALw_wcB) (Free) via your **Github account**
- Once you're logged in, go to the "Sites" tab and click "Add new site" -> Import an existing project
  ![alt text](/instructor_materials/assets/deploy-1.png)
- Connect and authorize via your Github account
- ![alt text](/instructor_materials/assets/deploy-2.png)
- ![alt text](/instructor_materials/assets/deploy-3.png)
- Find your existing class repository and click on it
- ![alt text](/instructor_materials/assets/deploy-4.png)
- Find "Publish Directory" and add the path to your final project's deploy folder.
  - For example, my final project is in my `WMGD-330` repo. Inside my repo I have `/examples/assignments/final/deploy`. So I update the "Publish Directory" value to be `/examples/assignments/final/deploy`. This is the folder Netlify will look at and auto deploy your code to give it a live URL.
  - I highly recommend you pick a location to add your final project and keep it there in your repo. I would go with `/assignments/final` and keep all folders lowercase and remove any spaces in the folder name. If you follow this example, you will put `/assignments/final` in that spot instead.
- Click Deploy
  ![alt text](/instructor_materials/assets/deploy-6.png)
  ![alt text](/instructor_materials/assets/deploy-5.png)

- This will send you to the project landing page.
  ![alt text](/instructor_materials/assets/deploy-7.png)

  - Now that you set this up, anytime you push your code to Github, Netlify will automatically deploy your changes to a live URL.
  - Under the "Production Deploys" tab, you'll see the status of your deployment. Wait for this status to say "published" to see all your new changes

  ![alt text](/instructor_materials/assets/deploy-8.png)

- Create a custom url by clicking on "Site Settings" and hit "Change Site Name". Under this section, you want to input your custom URL that Netlify will provide for you. For this class, the URL format must be `{drexel-user-id}-wmgd-330`. This will be the live link that I will use to grade your final
  ![alt text](/instructor_materials/assets/deploy-9.png)

- Once you've created a site, linked your Github repo, and changed the name, you're all set. Anytime you push your code, that link will auto update after a few minutes.
