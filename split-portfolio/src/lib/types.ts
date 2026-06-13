// metadata
export interface PostMetadata {
    title: string;
    date: string;
    description: string;
}

// mdsvex post
export interface PostModule {
    default: import('svelte').Component<any>;
    metadata: PostMetadata;
}