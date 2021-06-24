    body {&#xD;&#xA;      background-color: #BFF5FF;&#xD;&#xA;      margin: 0;&#xD;&#xA;      padding: 40px;&#xD;&#xA;    }&#xD;&#xA;    .main-container {&#xD;&#xA;      width: 50vw;&#xD;&#xA;      margin: 0 auto;&#xD;&#xA;    }&#xD;&#xA;    .post-container {&#xD;&#xA;      background-color: white;&#xD;&#xA;      border: 1px solid darkgrey;&#xD;&#xA;      padding: 20px 20px 0 20px;&#xD;&#xA;    }&#xD;&#xA;    .comment-btn {&#xD;&#xA;        text-decoration: none;&#xD;&#xA;        padding: 10px;&#xD;&#xA;        display: flex;&#xD;&#xA;        justify-content: flex-end;&#xD;&#xA;        &#xD;&#xA;        > i {&#xD;&#xA;          color: #03CCF2;&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    .comment-btn.active {&#xD;&#xA;      > i {&#xD;&#xA;        color: #D95FA4;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    .comments-container {&#xD;&#xA;      display: none;&#xD;&#xA;      &#xD;&#xA;      .comment {&#xD;&#xA;        background-color: white;&#xD;&#xA;        padding: 10px;&#xD;&#xA;        opacity: .8;&#xD;&#xA;        border-radius: 100px;&#xD;&#xA;        overflow-wrap: break-word;&#xD;&#xA;        margin-block-start: 10px;&#xD;&#xA;      }&#xD;&#xA;      &#xD;&#xA;      .comment-reply {&#xD;&#xA;        margin-left: 50px;&#xD;&#xA;      }&#xD;&#xA;      &#xD;&#xA;      .reply-btn {&#xD;&#xA;        font-size: 10px;&#xD;&#xA;        color: blue;&#xD;&#xA;        text-decoration: none;&#xD;&#xA;        &#xD;&#xA;        &--comment {&#xD;&#xA;          padding-left: 10px;&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;        &--reply {&#xD;&#xA;          padding-left: 60px;&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      &#xD;&#xA;      .reply-btn.active {&#xD;&#xA;        color: #D95FA4;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    .comments-container.active {&#xD;&#xA;      display: block;&#xD;&#xA;    }&#xD;&#xA;    .comment-box-main, &#xD;&#xA;    .comment-box {  &#xD;&#xA;      form {&#xD;&#xA;        input {&#xD;&#xA;          margin-top: 10px;&#xD;&#xA;          outline: none;&#xD;&#xA;          border: 1px solid black;&#xD;&#xA;          border-radius: 100px;&#xD;&#xA;          width: 100%;&#xD;&#xA;          padding: 10px 0;&#xD;&#xA;          padding-left: 10px;&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    .comment-box {&#xD;&#xA;      display: none;&#xD;&#xA;    }&#xD;&#xA;    .comment-box.active {&#xD;&#xA;      display: block;&#xD;&#xA;    }