import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import NearMeIcon from "@mui/icons-material/NearMeOutlined";

export const postButtons = [
  {
    icon: ThumbUpAltOutlinedIcon,
    name: "like",
  },
  {
    icon: CommentOutlinedIcon,
    name: "comment",
  },
  {
    icon: RepeatOutlinedIcon,
    name: "repost",
  },
  {
    icon: NearMeIcon,
    name: "send",
  },
];

export const headerIcons = [
  { name: "home", icon: HomeIcon },
  { name: "Network", icon: PeopleAltIcon },
  { name: "jobs", icon: BusinessCenterIcon },
  { name: "messages", icon: MailIcon },
  { name: "Notification", icon: NotificationsIcon },
];

export const newPostActions = [
  {
    icon: InsertPhotoIcon,
    name: "photo",
    color: "success",
  },
  {
    icon: YouTubeIcon,
    name: "video",
    color: "secondary",
  },
  {
    icon: EventIcon,
    name: "event",
    color: "warning",
  },
  {
    icon: ArticleIcon,
    name: "article",
    color: "warning",
  },
];
