import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { db, auth } from './firebaseConnection';
import { signOut } from 'firebase/auth';
import { doc, getDoc, onSnapshot, setDoc, collection, addDoc, getDocs, updateDoc } from 'firebase/firestore';
 
import { UsersList } from './users';
 
export default function FormsUsers() {
 
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")
 
  const [users, setUsers] = useState([])
 
  const [showForm, setShowForm] = useState(true)
  const [isEditing, setIsEditing] = useState("")
 
 
  useEffect(() =>{
 
    async function getDados() {
     const usersRef = collection(db, "clientes");
 
     onSnapshot(usersRef, (snapshot) => {
      let lista = [];
 
      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          nome: doc.data().nome,
          idade: String(doc.data().idade),
          email: doc.data().email
        })
      })
        setUsers(lista);
     })
 
     /*
     getDocs(usersRef)
     .then((snapshot) => {
      let lista = [];
 
      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          nome: doc.data().nome,
          idade: String(doc.data().idade),
          email: doc.data().email
        })
      })
        setUsers(lista);
     })
     .catch((err) => {
      console.log(err);
     })
 
     */
    } getDados();
  }, [])
 
  async function handleRegister(){
    /*
    await setDoc(doc (db, "clientes", "7"), {
      email: "clementina@gmail.com",
      nome: "Clementina",
      idade: 62
    })
    .then(() => {
      console.log("Cadastro realizado!")
    })
    .catch((erro) => {
      console.log(erro)
    })
 
    */
 
    await addDoc(collection(db, "clientes"), {
      nome: nome,
      idade: Number(idade),
      email: email
    })
    .then(() => {
      console.log("Cadastro realizado!")
 
      //limpando inputs após cadastro
      setNome("")
      setIdade("")
      setEmail("")
    })
    .catch((erro) => {
      console.log(erro)
    })
  }
 
  function handleToggle(){
    setShowForm(!showForm);
  }
 
  function editUser(data){
    setNome(data.nome)
    setIdade(String(data.idade))
    setEmail(data.email)
    setIsEditing(data.id)
  }
 
  async function handleEditUser() {
    const docRef = doc(db, "clientes", isEditing)
    await updateDoc(docRef, {
      nome: nome,
      idade: Number(idade),
      email: email
    })
 
    setNome("")
    setIdade("")
    setEmail("")
    setIsEditing("")
  }

  //Função para cancelar a edição e limpar os campos
  function  handleCancelEdit(){
    setNome("")
    setIdade("")
    setEmail("")
    setIsEditing("")
  }
  async function handleLogout() {
    await signOut(auth)
  }
 
  return (
    <View style={styles.container}>
      { showForm && (
      <View>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
      style={styles.input}
      placeholder="Digite o seu nome..."
      value={nome}
      onChangeText={ (text) => setNome(text) }
      />
 
      <Text style={styles.label}>Idade: </Text>
      <TextInput
      style={styles.input}
      placeholder="Digite a sua idade..."
      value={idade}
      onChangeText={ (text) => setIdade(text) }
      />
 
      <Text style={styles.label}>Email: </Text>
      <TextInput
      style={styles.input}
      placeholder="Digite o seu e-mail..."
      value={email}
      onChangeText={ (text) => setEmail(text) }
      />
     
      {isEditing !== "" ? (
        <View>
        <TouchableOpacity style={styles.buttonEnviarEditado} onPress={handleEditUser}>
        <Text style={styles.buttonTextEnviarEditado}>Enviar editado</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCancel} onPress={handleCancelEdit}>
          <Text style={styles.buttonCancelText}>Cancelar edição</Text>
        </TouchableOpacity>
        </View>
      ) : (
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
      )}
 
      </View>
      )}
 
      <TouchableOpacity style={{ marginTop: 8}} onPress={handleToggle}>
        <Text style={{ textAlign: "center", color: "#000"}}>
          {showForm ? "Esconder o formulário" : "Mostrar o formulário"}
        </Text>
      </TouchableOpacity>
 
      <Text style={{ marginTop: 14, marginLeft: 8, fontSize: 20, color: "#000"}}>
        Usuários:
      </Text>
 
      <FlatList
      style={styles.list}
      data={users}
      keyExtractor={ (item) => String(item.id) }
      renderItem={ ({item}) => <UsersList data={item} handleEdit={editUser} /> }
      />

      <TouchableOpacity style={styles.buttonLogout} onPress={handleLogout}>
        <Text style={styles.buttonTextLogout}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 2,
    margin: 15
  },
  buttonText: {
    padding: 8,
    color: '#66CDAA',//MediumAquaMarine
    textAlign: 'center',
    fontSize: 15
  },
  label: {
    color: "#000",
    fontSize: 15,
    margin: 8
  },
  input: {
    borderWidth: 1,
    margin: 8
  },
  list:{
    margin: 8
  },
  buttonEnviarEditado: {
    backgroundColor: "#483D8B",//DarkSlateBlue
    borderRadius: 2,
    margin: 8
  },
  buttonTextEnviarEditado: {
    padding: 8,
    color: "#ffffff",
    textAlign: 'center',
    fontSize: 15
  },
  buttonCancel: {
    backgroundColor: '#BC8F8F',//RosyBrown
    borderRadius: 2,
    marginHorizontal: 8,
    marginBottom: 8
  },
  buttonCancelText:{
    padding: 8,
    color: '#000000',
    textAlign: 'center',
    fontSize: 15
  },
  buttonLogout:{
    backgroundColor: '#104439',
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginBottom: 55,
    padding: 8,
    borderRadius: 4
  },
  buttonTextLogout:{
    color: '#ffffff',
    textAlign: 'center'
  }
});
