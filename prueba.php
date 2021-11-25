<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="../estilos/estilo.css">
</head>
<body>
<div class="contenidophp">
    <h1>FORMULARIO ENVIADO, PUEDES COMPROBAR LO ENVIADO AQUÍ:</h1>
     <div class="logoizq"> 
    <a href="../index.html"><img src="../img/hogar.png" alt="ir al inicio"></a>
  </div>
<table>
  <tr>
    <th>Nombre</th>
    <th>Apellidos</th>
    <th>Problema</th>
  </tr>
  <tr>
    <td><?php echo $_POST["fname"]; ?></td>
    <td><?php echo $_POST["lname"]; ?></td>
    <td><?php echo $_POST["motivo"]; ?></td>
  </tr>
</table>
</body>
</html>
