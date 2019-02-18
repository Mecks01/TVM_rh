<?php 

namespace apipdo;

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
		$this->_password = sha1($password);
	}

	private function formatNom($str) {
		$str=mb_strtolower($str);

		$strTmp = $this->formatMot("'",$this->formatMot(' ',$this->formatMot('-',$this->formatMot(',',$this->formatMot(':',$str)))));
		if($strTmp===$str)
		{
			$part1=mb_strtoupper($this->remplace_accents(mb_substr($str, 0, 1)));
			$part2=mb_substr($str, 1, mb_strlen($str));
			$strComplet=$part1.$part2;
			return $strComplet;
		}
		else return $strTmp;
	}

	private function formatMot($delim,$str) {
		$strComplet =null;
		$delimForm="/".$delim."/";
		if (preg_match($delimForm, $str)) {
			$strTmp=explode($delim, $str);
			$nbP=count($strTmp);
			$part1=mb_strtoupper($this->remplace_accents(mb_substr($strTmp[0], 0, 1)));
			$part2=mb_substr($strTmp[0], 1, mb_strlen($strTmp[0]));
			$strComplet=$part1.$part2;
			for ($i=1; $i < $nbP; $i++) { 
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
		$item = preg_replace('#\&([A-za-z]{2})(?:lig)\;#', '\1', $item);
		$item = preg_replace('#\&[^;]+\;#', '', $item);

		return $item;

	}

	function __construct()
	{

	}
}

 ?>