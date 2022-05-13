async function SignIn(email, pass) {
    let Users=[];
     Users =await  GetUsers();
     console.log(Users.usuarios);

     function esUsusario(usuario) {
        return usuario.correo === email;
    }
    
    console.log(Users.usuarios.find(esUsusario));
   result =Users.usuarios.find(esUsusario);
    return result == null ? false: true;
}

async function GetUsers() {
    let url = "http://localhost:3006/usuarios";
  let result = await fetch(url);
  let usuarios = await result.json();
return usuarios;
}