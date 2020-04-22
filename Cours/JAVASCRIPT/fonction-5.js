function strtok(str1, str2, n) {
    var tab = str1.split(str2);
    return (tab[n - 1]);
}
var str = "robert;dupont;amiens;8000";
document.write(strtok(str, ";", 3));