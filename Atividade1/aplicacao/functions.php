<?php
require_once('conection.php');
function insertClientePhp($conection, $array)
{
    try {
        $query = $conection->prepare("insert into Clientes(nome, cpf, login, senha) values (?, ?, ?, ?)");
        $result = $query->execute($array);
        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}

function alterClientePhp($conection, $array)
{
    try {
        $query = $conection->prepare("update Clientes set nome=?, cpf=?, login=?, senha=? where nome=?");
        $result = $query->execute($array);
        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
function buscaClientePhp($conection)
{
    try {
        $query = $conection->prepare("select * from Clientes ORDER BY codigo");
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
function buscaCliente_nomePhp($conection, $array)
{
    try {
        $query = $conection->prepare("select * from Clientes where nome=? ORDER BY codigo");
        $query->execute($array);
        $result = $query->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
function busca_alteraPhp($conection, $array)
{
    try {
        $query = $conection->prepare("select * from Clientes where nome=? ORDER BY codigo");
        $query->execute($array);
        $result = $query->fetch(PDO::FETCH_ASSOC);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
function deletePhp($conection, $array){
    try{
        $query = $conection->prepare("delete from Clientes where nome=?");
        $result = $query->execute($array);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }

}