<!-- Affichage du formulaire qui permet la saisie -->
<h1>Inscription</h1>

<form method="post"
	action="index.php?action=nouveauUser"
	enctype="multipart/form-data">
	<fieldset>
		<legend>Identifiants</legend>
		<label for="pseudo">* Pseudo : </label> 
		<input name="pseudo" type="text" id="pseudo" /> (le pseudo doit contenir entre 3 et 15 caractères)<br /> 
		<label for="password">* Mot de Passe : </label> 
		<input type="password" name="password" id="password" /><br /> 
		<label for="confirm">* Confirmer le mot de passe : </label> 
		<input type="password" name="confirm" id="confirm" />
	</fieldset>
		<p>Les champs précédés d'un * sont obligatoires</p>
		<p>
			<input type="submit" value="S'inscrire" />
		</p>

</form>
