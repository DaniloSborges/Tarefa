<?php  
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
require_once('conection.php');
require_once('functions.php');


//$pessoa = json_decode(file_get_contents("php://input"), true);
$json = file_get_contents('php://input');
$obj = json_decode($json);
$array = [];
$array = [$obj->nome, $obj->cpf, $obj->login, $obj->senha, $obj->busca];
//$array = (array) $obj;
//$array = json_decode($obj, true);
//$resultado = var_dump($array);

$resultado = alterClientePhp($conection, $array);


if($resultado) {
	echo "Sucesso ao alterar no banco de dados";
} else {
	echo "Falha ao alterar no banco de dados";
}

?>