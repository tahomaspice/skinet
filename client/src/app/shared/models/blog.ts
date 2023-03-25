export interface BlogItem {
    blogId: number;
    blogPostName: string;
    pictureUrl: string;
    blogDate: string;
    
}

export interface Blog {
    id: number;
    blogDate: string;
    blogPostName: string;
    blogPostText: string;
    status: string;
}
