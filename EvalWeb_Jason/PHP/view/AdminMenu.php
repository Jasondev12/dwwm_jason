 <!--MENU-->

 <?php
 if ($lvl < 2){
     header("Location : index.php?action=connexion");
 }
 ?>

 <div class="contenuMenu">
    <div class="ensembleBouttonListe">
        <a class="bouttonListe" id="bouttonListe1" type="submit" href="index.php?action=adminEleves">Gérer les élèves</a>
        <a class="bouttonListe" id="bouttonListe1" type="submit"
            href="index.php?action=adminEnseignants">Gérer les enseignants</a>
            <a class="bouttonListe" id="bouttonListe1" type="submit" href="index.php?action=adminNotes">Gérer les élèves</a>
            <a class="bouttonListe" id="bouttonListe1" type="submit" href="index.php?action=adminMatieres">Gérer les matières</a>
    </div>
    </div>