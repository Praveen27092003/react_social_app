import Header from "./Header"
import Nav from "./Nav"
import Home from "./Home"
import NewPost from "./NewPost"
import PostPage from "./PostPage"
import About from "./About"
import Missing from "./Missing"
import Footer from "./Footer"
import {  Route, Routes } from "react-router-dom"
import EditPost from "./EditPost"
import { DataProvider } from "./context/DataContext"

function App() {

  //     {/* ---------------Example Social Media Post Page--------------------- */}
  // const [posts, setPosts] = useState([])
  // const [search, setSearch] = useState('')
  // const [searchResults, setSearchResults] = useState([])
  // const [postTitle, setPostTitle] = useState('');
  // const [postBody, setPostBody] = useState('');
  // const [editTitle, setEditTitle] = useState('');
  // const [editBody, setEditBody] = useState('');
  // const navigate = useNavigate()
  // const {width} = useWindowSize()
  // const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts')

  // useEffect(() => {
  //   setPosts(data);
  // }, [data])

 
  // // // axios get-------------------
  // // useEffect(() => {
  // //   const fetchPosts = async () => {
  // //     try {
  // //       const response = await api.get('/posts')
  // //       setPosts(response.data)
  // //     } catch (err) {
  // //       if (err.response) {
  // //         console.log(err.response.data)
  // //         console.log(err.response.status)
  // //         console.log(err.response.headers)
  // //       } else {
  // //         console.log(`Error: ${err.message}`)
          
  // //       }
  // //     }
  // //   }

  // //   fetchPosts()
  // // },  [])

  // useEffect(() => {
  //   const filteredResults = posts.filter((post) =>
  //   ((post.body).toLowerCase()).includes(search.toLowerCase()) || 
  //      ((post.title).toLowerCase()).includes(search.toLowerCase()))

  //      setSearchResults(filteredResults.reverse())
  // }, [posts, search])
  

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  //     const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  //     const newPost = { id, title: postTitle, datetime, body: postBody };

  //     try {
  //       // axios post-----------------
  //       const response = await api.post('/posts', newPost)
  //       const allPosts = [...posts, response.data];
  //       setPosts(allPosts);
  //       setPostTitle('');
  //       setPostBody('');
  //       navigate('/')
  //     } catch (err) {
  //       if (err.response) {
  //         console.log(err.response.data)
  //         console.log(err.response.status)
  //         console.log(err.response.headers)
  //       } else {
  //         console.log(`Error: ${err.message}`)
          
  //       }
  //     }
  // }

  // const handleEdit = async (id) => {
  //   const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  //   const updatedPost = { id, title: editTitle, datetime, body: editBody };

  //   try {
  //       const response = await api.put(`/posts/${id}`, updatedPost)
  //       setPosts(posts.map(post => post.id === id ? {...response.data} : post ));
  //       setEditTitle('');
  //       setEditBody('');
  //       navigate('/')
  //   } catch (err) {
  //       if (err.response) {
  //         console.log(err.response.data)
  //         console.log(err.response.status)
  //         console.log(err.response.headers)
  //       } else {
  //         console.log(`Error: ${err.message}`)
          
  //       }
  //     }
  // }
   

  // const handleDelete = async (id) => {
  //   try {
  //     await api.delete(`/posts/${id}`)
  //     const postsList = posts.filter(post => post.id !== id);
  //     setPosts(postsList);
  //     navigate('/')
  //   } catch (err) {
  //     if (err.response) {
  //       console.log(err.response.data)
  //       console.log(err.response.status)
  //       console.log(err.response.headers)
  //     } else {
  //       console.log(`Error: ${err.message}`)
        
  //     }
  //   }
  // }
       
  return (
    <div className="App">




      {/* -----------------------------REACR ROUTER DOM CONCEPT---------------------------------------- */}
    
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          
          <li><Link to="/postpage">PostPage</Link></li>
        </ul>
      </nav> */}

      {/* <Routes> */}
         {/* -------------------------------------------------------- */}
        {/* <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/newpost" element = {<NewPost />} /> */}

        {/* <Route path="/postpage" element = {<PostPage />} />
        <Route path="/postpage/:id" element = {<Post />} />
        <Route path="/postpage/newpost" element = {<NewPost />} /> */} 

        {/* -------------------------------------------------------- */}
       
        
        
        
        
        {/* ------------How To Use The Nested Route-------- */}
            {/* <Route path="/postpage" element ={ <PostLayout />}> */}
            {/* -----HERE DOES NOT USE "PATH",, USE THE INDEX ITS SHOW THE DEFAULT "ELEMENT" PAGES--------- */}
                {/* <Route  index element = {<PostPage />} />               
                <Route path=":id" element = {<Post />} />    
                <Route path="newpost" element = {<NewPost />} />
            </Route> */}
        {/* ------------How To Use The Nested Route-------- */}


        {/* ------------the " * in path" it is used to goto the default page when the searching path is not present--------------- */}
            {/* <Route path="*" element ={ < Missing />} />    */}
        {/* ------------the " * in path" it is used to goto the default page when the searching path is not present--------------- */}

      {/* </Routes> */}


      {/* -----------------------------REACR ROUTER DOM CONCEPT---------------------------------------- */}


      {/* ---------------Example Social Media Post Page--------------------- */}

  <DataProvider>

         {/* <Header title="Social Media" width={width}/> */}
         <Header title="Social Media" />
         {/* <Nav 
           search={search}
           setSearch={setSearch}
         /> */}
         <Nav />
         <Routes>
           <Route path="/" element = {
            //  <Home 
            //     posts = {searchResults}
            //     fetchError = {fetchError}
            //     isLoading = {isLoading}
            //  />
            <Home />
            }                         
           />

           <Route path="post" >
              <Route index element = {
                // <NewPost 
                // handleSubmit={handleSubmit}
                // postTitle={postTitle}
                // setPostTitle={setPostTitle}
                // postBody={postBody}
                // setPostBody={setPostBody} />
                <NewPost  />
              }
               
              />
              
              <Route path=":id" element = {
                // <PostPage 
                //   posts = {posts}
                //   handleDelete = {handleDelete}
                // /> 
                <PostPage />
                  }

               />
          </Route>

           <Route path="/edit/:id" element = {
            // <EditPost 
            //     posts={posts}
            //     handleEdit={handleEdit}
            //     editBody={editBody}
            //     setEditBody={setEditBody}
            //     editTitle={editTitle}
            //     setEditTitle={setEditTitle}
            // />
            <EditPost />
              }
                
           />

            

           <Route path="about" element = {
             <About /> }                          
           />

           <Route path="*" element = { 
            <Missing />}                       
           />

         </Routes>
         <Footer />
  </DataProvider>
    </div>
  );
}

export default App;
