import { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { AccountCircle, Menu } from "@material-ui/icons";
import RefreshIcon from "@material-ui/icons/Refresh";
import styles from "./styles/Home.module.scss";
// import { useState } from "react";
import { Item } from "./Routes/Components/item/item";
import { Profile } from "./Routes/Components/profile/profile";
import { ChatBox } from "./Routes/Components/chatBox/chatBox";
import { withRouter } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Routes/Controllers/authProvider";

import logo from "./White.png";

const FBSampleData = [
  {
    id: 1,
    fname: "Nitin",
    lname: "Sharma",
    email: "nitin.sharma123@gamil.com",
  
    type: "post",
    intro: {
      title: "Facing isue regarding FB market place.",
      message: "I am not able to upload pictures of my product.",
    },

    chats: [
      ["How, can I upload my product photoes on FB market place?"],
      [
        "Try to refresh the pages.",
        "If you won't able to do that again then restart your device.",
      ],
      ["Ok, I'll try that!"],
      ["Yes if it won't works please do let us know!"]
    ],
  },
  {
    id: 2,
    fname: "Aditya Raj",
    type: "DM",
    lname: "Singh",
    email: "ars@gmail.com",
    intro: {
      title: "Name change problem",
      message: "Facing problem regarding name change.",
    },

    chats: [
      ["Hello, I want help regarding the my FB name change!"],
      ["Yes, go to the advance setting options", "There you might find an option of changing name!"],
      ["Yes, It works!","Thanks!"],
    ],
  },
];

const Home = () => {
  // const [currentUser, setCurrentUser] = useState();
  const { currentUser } = useContext(AuthContext);

  const [data] = useState(FBSampleData);

  const [selected, setSelected] = useState(FBSampleData[0]);

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <List>
          <ListItem>
            <ListItemIcon>
              <li className="my-4 py-2">
                <img
                  src={logo}
                  className="rounded-circle"
                  height="30px"
                  width="30px"
                  alt="logo"
                />
              </li>
            </ListItemIcon>
          </ListItem>
          <ListItem className={styles.active}>
            <ListItemIcon>
              <li
                className="my-4 py-2"
                style={{
                  background: "white",
                  backgroundSize: "100%",
                  color: "#255190",
                  paddingLeft: "8px",
                }}
              >
                <i className="fa fa-inbox fa-lg"></i>
              </li>
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <li
                className="my-4 py-2"
                style={{
                  backgroundSize: "100%",
                  color: "white",
                  paddingLeft: "8px",
                }}
              >
                <i className="fa fa-user fa-lg"></i>
              </li>
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <li
                className="my-4 py-2"
                style={{
                  backgroundSize: "100%",
                  color: "white",
                  paddingLeft: "8px",
                }}
              >
                <i className="fa fa-line-chart fa-lg"></i>
              </li>
            </ListItemIcon>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemIcon>
              {!currentUser && <AccountCircle className={styles.icon} />}
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              {currentUser && (
                <img
                  src={currentUser.picture}
                  className="rounded-circle"
                  height="30px"
                  width="30px"
                  alt="profile"
                />
              )}
            </ListItemIcon>
          </ListItem>
        </List>
      </div>
      <div className={styles.list}>
        <div className={styles.title}>
          <Menu />
          Conversations
          <RefreshIcon />
        </div>
        <div>
          {data.map((item, idx) => (
            <div
              key={idx}
              className={
                selected && item.id === selected.id ? styles.selected : ""
              }
            >
              <Item
                item={item}
                selected={selected && item.id === selected.id}
                onSelect={() => setSelected(item)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.chatBox}>
        <div className={styles.title}>
          {selected && (
            <>
              {selected.fname} {selected.lname}
            </>
          )}
        </div>
        <div>{selected && <ChatBox item={selected} />}</div>
      </div>
      <div className={styles.infoBox}>
        {selected && <Profile item={selected} />}
      </div>
    </div>
  );
};

export default withRouter(Home);
