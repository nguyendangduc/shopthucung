import React, {Component} from 'react';
import AppContext from 'AppContext';
import { withRouter } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import RoutesUtils from 'utils/RoutesUtils';
import AccessDeny from 'router/common/AccessDeny';
import { connect } from 'react-redux';

class Authorization extends Component {

  constructor(props, context) {// lau context trong classComponent
    super(props);
    const routes = context;
    this.state = {
      accessGranted: true,// truy cập đã được chấp thuận vào "route"
      routes
    }
  }

  componentDidMount() {
    if (!this.state.accessGranted) {
      this.redirectRoute();
    }
  }

  static getDerivedStateFromProps(props, state) {
    const {location, userData} = props;
    console.log(props)
    const {pathname} = location;
    const matched = matchRoutes(state.routes, pathname)[0];
    // chi can .length la du vi userData lay tu store ra mac dinh no dax co listUserRules
    if(pathname === '/login' && userData.listUserRules.length > 0) {// nếu ở trang login và đã đăng nhập thành công(tức là đã có listQuyền nhưng ko có nghĩa là đã được vào router) 
      return { accessGranted: false }// set UserData xong ko có nghĩa là được truy cập vào routes và phải check quyền xong mới
    } 
    return {
      accessGranted: matched ? RoutesUtils.hasPermission(matched.route.auth, userData.listUserRules) : true// cach viet chong loi undefine
    }
}


  shouldComponentUpdate(nextProps, nextState) {
    return nextState.accessGranted !== this.state.accessGranted;
  }

  componentDidUpdate() {
    if (!this.state.accessGranted) {
      this.redirectRoute();
    }
  }

  // cái này nó chỉ làm nv điều hướng nó ko quan tâm check quyền thành công ko
  redirectRoute() {// điều hướng có 2 loại là điều hướng sang login và từ login sang trang cũ,nếu đã setUser thành công thì điều hướng sang trang cũ nếu chữa có user thì điều sang login
    const {userData, history, location} = this.props;
    const {pathname, state} = location;
    const {listUserRules} = userData;
    let redirectUrl = state && state.redirectUrl ? state.redirectUrl : '/';// check chống lỗi undefine giống kiểu if(filter && filter.by) nếu state k co thì mặc định về home
    // neu gia su ban dau ở route login submit thì lúc đó có danh sacsg quyền user nhưng chưa có state nên mặc định là về trang chủ
    if (!listUserRules || listUserRules.length === 0) {// listUserRule mac dinh lay tu store la []
      history.push({ pathname: "/login", state: { redirectUrl: pathname } });//pt cua history thay doi thuoc tinh location,bản chất bấm Link là sd cái history.push({ pathname: '/new-place' })
    } else { // nếu đã có userData mà vẫn đang ở ngoài cổng thì sẽ vào trang cũ hoặc trang chủ (2 trường hợp)
      // nếu đã đăng nhập thành công mà sửa path là login thì sẽ check đang ở cổng mà đã có user thì chuyển vào /home
      //state này ở 1 location mới, khi push cái khac(Link sang cai khác)
      if(pathname === "/login")// từ trang login lây gt từ state ở location đúng ở trang này
      history.push({pathname: redirectUrl});
    } 
  }
      // page1 page2 page3 thêm mới 1 location, nếu ở page2 dùng push sang page4 thì page3(feature page) sẽ mấtt
      //  page1 page2 page3 nếu ở page 2 replace bằng page4 thì page2 chuyển thành page4 và các feature page sẽ ko bị mất
      // goBack(), goForward()
  render() {
    return this.state.accessGranted ? <React.Fragment>{this.props.children}</React.Fragment> : <AccessDeny/>;
    // có 2 cách 1 là import vào đây rồi render .. cách 2 truyền vào thông props rồi render ra props
  }
}

Authorization.contextType = AppContext;

const mapStateToProps = (store) => {
  console.log(store)
  // configs,
  //   settings,
  //   auth,// cái này lại combine 2 reducer user và login nên store.auth.user
  //   form: reduxFormReducer
  return {userData: store.userReducer}}



export default withRouter(connect(mapStateToProps)(Authorization))
// work flow 
// nếu ban đầu ở login đăng nhập thì cấp quyền cho người dùng, nhưng accessGranted = false để báo trạng thái lúc này vẫn chưa truy cập được vào route do chưa check quyền
// accessGranted = false nên redirect , ở đây kt nếu có quyefnf rồi thì điều hướng sang trang khác, vì lúc này state undefine nên mặc định trang chủ

// khi click vào contact , quyền user chưa có nên check hasPermission() == false nên acessGrated = false để báo trạng thái lúc này vẫn chưa được truy câp được vào route do chưa có quyền người dùng và chưa check quyền
// vì chưa truy cập routes nên phải chuyển hướng 
// hàm  chuyền hướng check nếu chưa có quyền thì ra login
// submit => userdata thay đổi propsthay đổi thực hiện lại getdevice.... nhận thấy ở login và đã có quyền -> accessGranted = false để báo trạng thái lúc này vẫn chưa được truy câp được vào route do chưa check quyền yêu cầu điều hướng sang...
// check đã có quyền và điều hướng sang routes cũ , ở roites cũ checjk quyền hợp lệ mới gán accessGranted = true