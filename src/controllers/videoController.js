

export const trending = (req, res) => {
    const videos = [
        {
            title: "first video",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 59,
            id: 1
        },
        {
            title: "second video",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 59,
            id: 1
        }
    ]
    res.render("home", {pageTitle: "Home", videos})
}
export const see = (req, res) => res.render("watch", {pageTitle: "Watch"});
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("search");
export const deleteVideo = (req, res) => res.send("delete");
export const upload = (req, res) => res.send("upload");
