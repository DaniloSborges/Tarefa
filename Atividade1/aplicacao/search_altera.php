<?php  
header('Access-Control-Allow-Origin: *');

require_once('conection.php');
require_once('functions.php');

$nome_produto = $_REQUEST['busca'];
$array = [];
$array = [$nome_cliente];
$resposta = busca_alteraPhp($conection, $array);
if($resposta) {
	echo json_encode($resposta);
} else {
	echo("Não existem produtos com esse nome no banco");
}
?>