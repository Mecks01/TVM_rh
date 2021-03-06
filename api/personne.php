<?php 
namespace api;
/**
 * 
 */
class Personne
{
	public $id;
	private $_nom;
	private $_prenom;
	public $nationalite;
	public $dateNaissance;
	public $adresse;
	public $numTel;
	public $email;
	private $_password;
	public $civilite;
	public $nbEnfants;
	public $image;
	public $province ;
	public $genre ;
	public function getNom() {
		return $this->_nom;
	}
	public function setNom($nom) {
		$this->_nom = trim(strtoupper($nom));
	}
	public function getPrenom() {
		return $this->_prenom;
	}
	public function setPrenom($prenom) {
		$this->_prenom = trim($this->formatNom($prenom));
	}
	
	public function getPassword() {
		return $this->_password;
	}
	public function setPassword($password) {
		$this->_password = password_hash($password, PASSWORD_BCRYPT);
	}
	private function formatNom($str) {
		//on utilise formatMot(delimiteur, chaine) pour chaque séparateur possible
		$str=mb_strtolower($str);
		$strTmp = $this->formatMot("'",$this->formatMot(' ',$this->formatMot('-',$this->formatMot(',',$this->formatMot(':',$str)))));
		if($strTmp===$str)
		{
			$part1=mb_strtoupper($this->remplace_accents(mb_substr($str, 0, 1)));//on applique remplace_accents 
			$part2=mb_substr($str, 1, mb_strlen($str));//on applique mb_strtolower au reste de la chaine
			$strComplet=$part1.$part2;
			return $strComplet;
		}
		else return $strTmp;
	}
	private function formatMot($delim,$str) {
		$strComplet =null;
		$delimForm="/".$delim."/";//sans ça preg_match refuse la chaine...
		if (preg_match($delimForm, $str))//Si il y a le delimiteur >
		{
			$strTmp=explode($delim, $str);//on explose
			$nbP=count($strTmp);//on compte le nombre de caractere de la chaine
			$part1=mb_strtoupper($this->remplace_accents(mb_substr($strTmp[0], 0, 1)));//on applique remplace_accents 
			$part2=mb_substr($strTmp[0], 1, mb_strlen($strTmp[0]));//on applique mb_strtolower au reste de la chaine
			$strComplet=$part1.$part2;//on rassemble les 2 parties de la chaine (premier caractere et les autres)
			for ($i=1; $i < $nbP; $i++) 
			{
				//on fait la même chose pour les autres chaines tirées de l'explode en remettant le délimiteur 		pour obtenir la chaine complete 
				$part1=mb_strtoupper($this->remplace_accents(mb_substr($strTmp[$i], 0, 1)));
				$part2=mb_substr($strTmp[$i], 1, mb_strlen($strTmp[$i]));
				$strComplet.=$delim.$part1.$part2;
			}
			return $strComplet;
		}
		else return $str;
	}
	private function remplace_accents($item, $charset = 'utf-8')
	{
		$item = htmlentities($item, ENT_NOQUOTES, $charset);
		$item = preg_replace('#\&([A-za-z])(?:uml|circ|tilde|acute|grave|cedil|ring)\;#', '\1', $item);
		$item = preg_replace('#\&([A-za-z]{2})(?:lig)\;#', '\1', $item); // pour les ligatures e.g. '&oelig;'
		$item = preg_replace('#\&[^;]+\;#', '', $item); // supprime les autres caractères
		return $item;
	}
	function __construct()
	{
		mb_internal_encoding('UTF-8');
	}
}
 ?>