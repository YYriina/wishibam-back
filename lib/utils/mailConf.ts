import { MAIL_SMTP, MAIL_PASS, MAIL_PORT, MAIL_USER} from "./env";

class  mailConf {
    public Host =  MAIL_SMTP ;
    public port =  MAIL_PORT ;
    public user =  MAIL_USER ;
    public pass =  MAIL_PASS ;
}

export default new mailConf