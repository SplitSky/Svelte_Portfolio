// src/lib/types.ts
export interface PostMetadata {
	title: string;
	date: string;
	description: string;
	author?: string;
}

export interface PostEntry {
	slug: string;
	metadata: PostMetadata;
}
