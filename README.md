# Mettre en place le script permettant le suivi de ces candidatures. 

## Google Sheet

Faut créer un Google Sheet et recuperer son id dans l'url 
![image](https://github.com/Chadi-Mangle/job-seeking/assets/118349600/692439b8-d7a5-4781-8b31-e20ee1a28f2c)

Et rajouter ces champs (mettre le nombres de candidatures à 0)
![image](https://github.com/Chadi-Mangle/job-seeking/assets/118349600/04c123aa-1e88-485d-8e7d-b1a4e4a67dfe)

## Gmail

Rajouter les deux libellés Candidature et Candidature-traitée

![image](https://github.com/Chadi-Mangle/job-seeking/assets/118349600/3ed60bc1-bd73-4835-bcc7-08396030894d)

Une fois créees Gérer les libellés et ajouter ces régles de filtrages 

![image](https://github.com/Chadi-Mangle/job-seeking/assets/118349600/902dbe98-42bd-4fdb-bf35-800448a50a00)

## Google Apps Script

Rendez vous sur le site de google app script et connecter vous avec le même compte google que votre adresse mail

![image](https://github.com/Chadi-Mangle/job-seeking/assets/118349600/d8f03541-fd36-4948-bf1f-65f0d151e34b)
Dans google script on ajoute le code du GitHub

![image](https://github.com/Chadi-Mangle/job-seeking/assets/118349600/0ebee1f0-6b4e-4bed-86e3-9b1f05fb35d3)

Remplacer dans le code ***sheetId*** par la l'identifiant du sheet que vous avez récupérer. 

Ensuite ajouter un déclancheur pour que script s'execute automatiquement tous les jours

![image](https://github.com/Chadi-Mangle/job-seeking/assets/118349600/62a2da77-871b-408e-93aa-171df3221c43)

  

