import React from "react"
import PostCard from "./PostCard"
import styles from "../css/postlist.module.css"

const PostList = ({ posts }) => {
  return (
  <Layout>
      <section className={styles.template}> 
    <Link href="http://www.centromedicomarista.com" className={styles.link}>
      Voltar ao Site
    </Link>
    </section>
    </Layout>
    <section className={styles.posts}>
      <h1>Alvaro De Paula</h1>
      <h4>Blog</h4>
      <div className={styles.center}>
        {posts.map(({ node }, index) => {
          return <PostCard key={index} post={node} />
        })}
      </div>
    </section>
  )
}

export default PostList
