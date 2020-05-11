
<!--LOGIN-->
<div class="modal-dialog">
    <form action="index.php?action=connexionAction" role="form" method="post">
        <label for="Login">Pseudo : </label>
        <div class="form-group">
            <div class="input-group">
                <input name="Login" id="Login" type="text" class="form-control" placeholder="Pseudo" />
            </div>
        </div>
        <label for="MotdePasse">Mot de passe : </label>
        <div class="form-group">
            <div class="input-group">
                <input name="MotdePasse" id="MotdePasse" type="password" class="form-control" placeholder="Mot de passe" />
            </div>
        </div>
        <div class="form-group text-center">
            <button type="submit" class="btn btn-success btn-lg">Se connecter</button>
        </div>
    </form>
</div>