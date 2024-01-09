import React from 'react'
import { Metadata } from 'next';

export const generateMetadata = async ({params}: { params: { blogId: string}}): Promise<Metadata> => {

    const post: Blog = await getPostById(params.blogId);
    return {
        title: post.title || "Posts",
    }
}

const getUserById =async (userId: number) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        { cache: 'no-store' }
    )
    const user: User = await response.json()
    return user;
}

const getPostById = async (blogId: string) => {

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${blogId}`,
        { cache: 'no-store'}
    )
    return await response.json();
};


const SingleBlog = async ({ params } : { params: { blogId: string}}) => {

    const post: Blog = await getPostById(params.blogId);
    const user: User = await getUserById(post.userId);
    
    return (
        <div className="grid">
            <div key={post.id} className="p-6">
                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{post.title}</p>
                <div className='m-5'></div>
                <blockquote className="font-normal text-gray-700 dark:text-gray-800">{post.body} {post.body} {post.body} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit repellendus perspiciatis quaerat minima? Repellendus consequuntur deserunt, est, maiores esse voluptatum error soluta dolorum magnam laudantium, ut fuga. Beatae, vel.
                Illum corrupti earum perspiciatis sed aliquid? Quam nulla vero ratione cum fugit vitae distinctio eveniet ducimus quaerat ullam totam voluptas deserunt quae, ipsum eos, ut inventore sed consectetur veniam praesentium.
                Totam numquam, ea sapiente deserunt nisi consectetur quaerat, repellendus nemo obcaecati iusto officiis odio optio error dolorum aliquid assumenda. Nulla ipsam facilis itaque neque asperiores minima officia odio consequuntur deserunt?
                Maiores, veritatis magnam eveniet corrupti dolor quam, porro doloremque accusamus reiciendis dolorum officia, eum maxime? Facilis minima atque temporibus laboriosam, eius tenetur fugit laudantium adipisci quis dolorum rem voluptatum perferendis.
                A autem ducimus aspernatur dolor asperiores. Quas maiores iure a consequuntur tenetur reprehenderit! Nam pariatur voluptatum ab quaerat expedita natus doloremque deleniti optio reiciendis aliquid! Explicabo in suscipit molestiae veritatis.
                Ut rem aliquid temporibus at rerum aliquam fugiat optio consequatur sit id eum, ducimus nostrum minus natus autem molestias ratione qui adipisci? Doloremque iste magni voluptatum, nihil consequuntur similique dolorem?
                Quaerat consequuntur inventore repellendus enim ut eligendi quam dolores recusandae veniam ex beatae commodi voluptatibus animi adipisci aspernatur nesciunt aliquid autem nihil, consectetur eum nam maiores earum. Error, quas provident.
                Quam maiores fugiat, minima incidunt voluptas libero praesentium eaque, laudantium ipsa velit accusamus sunt iusto modi, sed laborum quae non mollitia maxime porro perferendis quisquam unde. Repellat optio voluptatibus id?
                Optio libero ipsa omnis aliquid! Nulla vero pariatur voluptatem voluptate exercitationem maiores quam placeat et sequi distinctio minus, quae laudantium veniam inventore doloribus error suscipit aliquid, commodi ab aut nostrum.
                A alias unde aliquam fugit atque vitae sint ipsum harum voluptatibus officiis iure, esse laborum eaque hic obcaecati. Vel numquam aut alias, voluptas incidunt vero exercitationem. Nostrum sit magni pariatur!
                Iste voluptas eligendi atque. Quisquam repellat, rem accusamus ut molestiae aut aspernatur minus et quasi numquam? At excepturi deleniti odit sint incidunt autem rerum. At, nisi! Illo earum eligendi atque!
                Aspernatur inventore asperiores itaque accusamus alias, consequatur recusandae harum laboriosam repellat officiis blanditiis beatae totam doloremque distinctio ipsa, molestiae odit? Repellat eum odit optio natus consequatur harum molestias mollitia provident.
                Nihil illo eligendi soluta dicta a? Odio unde odit sapiente laudantium soluta, ipsum, dolorem sed dolores, quia fuga velit. Ea doloribus animi quis quos vero est eos cupiditate odio quisquam.
                Dolores molestias beatae rem, accusamus pariatur, suscipit expedita ex nam, tempora eum velit recusandae quidem nesciunt sint ducimus. Voluptas laborum deserunt at velit aut quibusdam quae quo eum cupiditate eaque.
                Natus temporibus dolores eaque, deserunt debitis qui iste recusandae aperiam, deleniti aliquid consequatur neque ex eius nam. Officiis neque itaque obcaecati porro numquam minima ut ducimus eum ab, veritatis impedit.</blockquote>
                <div className='m-5'></div>
                <p className='font-normal text-gray-700 dark:text-gray-800'>Author Name : <i>{user.name}</i></p>
                <p className='font-normal text-gray-700 dark:text-gray-800'>Author Email : <i> {user.email}</i></p>
            </div>
        </div>
    )
}

export default SingleBlog;