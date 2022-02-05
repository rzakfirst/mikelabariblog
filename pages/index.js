import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { useEffect } from 'react';
import { getPosts } from '../services';

export default function Home({ posts }) {
 
  return (
    <div className="container mx-auto px-10 mb-8">
    
      <FeaturedPosts />
    
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8216728679741517"
     crossorigin="anonymous">
    </script>
    <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8216728679741517"
     data-ad-slot="6223801458"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
    <script>
    
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

