/*
    Customize hiệu ứng css riêng cho các màn hình
*/

/*Màn hình Login*/
.login-container {
    position: relative;
    animation-name: fade-in;
    animation-duration: 1.5s;
    animation-fill-mode: both;
    animation-timing-function: ease-out;
}

.custome-angel {
    padding-top: 9px !important;
}

.fa-angle-left {
    padding-top: 0px !important;
}

@keyframes fade-in {
    0% {
        opacity: 0;
        transform: translate3d(0,-100%,0);
    }

    100% {
        opacity: 1;
        transform: translate3d(0,0,0);
    }
}

.bg-login {
    background: url(../img/the-world.jpg);
    background-size: cover;
}

.tab-text {
    color: black;
}

/*Màn hình chính*/
.menu-side {
    /*background: url(../img/forest.png);*/
    border-right: 2px solid rgba(0,0,0,.0625);
    background: #ffffff;
    /*background: radial-gradient(circle, rgba(38,45,42,0.9051995798319328) 10%, rgba(0,12,36,0.7903536414565826) 100%);*/
}

#logo-shield {
    width: 70px;
    height: 70px;
}

.grey-a-tag {
    color: #72777A !important;
    text-transform: none;
}

    .grey-a-tag:hover {
        background-color: #dddfeb;
    }

.bg-sub-menu {
    background: white;
    border: 2px solid rgba(0,0,0,.0625) !important;
}

.alert {
    color: red;
}

.sub-menu:hover span {
    color: black;
}

.divider {
    background: rgba(0,0,0,.0625);
}

/*.sub-tag {
    font-size: 12px;
    color: #72777A !important;
}*/

/*.sidebar-brand-text {
    width: 100px;
}*/

.validation-top {
    margin-left: 10px;
    margin-right: 10px;
}

.header {
    font-size: .75rem;
    color: #72777A !important;
}

    .header:hover span {
        color: black;
    }

.search-field {
    background: #f2f3f6 !important;
}

.icon-notice {
    color: #555555;
}

.fa-menu {
    width: 2.25rem;
    font-size: 18px;
}

.fa-menu-right {
    width: 1.75rem;
    margin-left: -0.5rem;
    color: dodgerblue;
}

.lv-3-news {
    color: cornflowerblue !important;
}

.lv-3-in-out {
    color: cornflowerblue !important;
}

.lv-3-tranning {
    color: cornflowerblue !important;
}

.lv-3-documents {
    color: cornflowerblue !important;
}

.lv-3-delegate {
    color: cornflowerblue !important;
}

th {
    text-align: center;
    vertical-align: middle !important;
    white-space: nowrap;
}

td {
    text-align: center;
    vertical-align: middle !important;
    white-space: nowrap;
    font-size: 14px;
}

.no-margin-bottom {
    font-size: .9rem;
    color: #393939
}

/*#approve-table_length, #BI-table_length, #LE-table_length {
    display: none;
}*/

table {
    column-width: auto;
    overflow: auto;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

.btn-standard {
    border-radius: 4px;
    color: white;
    border: none;
    font-size: 8px;
    width: 18.5px;
    height: 20px;
    text-align: left;
}

.btn-edit {
    background-color: #4CAF50;
}

.btn-standard:hover {
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.btn-back {
    background-color: orange;
    color: white !important;
    border: none;
    cursor: pointer;
}

    .btn-back:hover {
        background-color: orange;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }

    .btn-back:visited, .btn-back:active {
        background-color: orange !important;
    }

.btn-cancel {
    background-color: orange;
    color: white !important;
    border: none;
    cursor: pointer;
}

    .btn-cancel:hover {
        background-color: orange;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }

    .btn-cancel:visited, .btn-cancel:active {
        background-color: orange !important;
    }

.btn-print {
    border-radius: 4px;
    background-color: dodgerblue;
    color: white;
    border: none;
}

    .btn-print:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }

.btn-detail {
    border-radius: 4px;
    background-color: dodgerblue;
    color: white;
    border: none;
}

    .btn-detail:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }

.table-heading {
    background: #17a2b8;
    color: white;
    font-size: .9rem;
}

    .table-heading:hover {
        background: #17a2b8 !important;
        color: white !important;
    }

th {
    padding: .4rem !important;
}

td {
    padding-top: .2rem !important;
    padding-bottom: .2rem !important;
}

.dataTable_filter_date {
    text-align: left;
}

.from-date, .to-date {
    border-radius: .4rem !important;
}

.btn-from-date {
    border-top-right-radius: .3rem !important;
    border-bottom-right-radius: .3rem !important;
}

.row-1 {
    margin-top: 15px;
    margin-bottom: 15px;
}

/*.checkbox-inline {
    position: relative;
    display: inline-block;
    margin-bottom: 0;
    padding-left: 20px;
    vertical-align: middle;
    cursor: pointer;
}*/
.specific-date-pick {
    margin-left: 0px !important;
}

#estimated_date {
    margin-left: -2px;
}

.close {
    color: red;
}

    .close:hover {
        color: darkred;
    }

.main-data-container {
    width: 100%;
    overflow-x: auto;
    border: 1px solid #e3e6f0;
}

.form-left, .form-right {
    background-color: aliceblue;
}

.input-previous-button {
    border-radius: .2rem !important;
}

.exampleModalLabel {
    color: dodgerblue;
}

.form-left {
    border: 1px solid #d1d3e2;
    border-radius: 5px;
}

.form-right {
    border: 1px solid #d1d3e2;
    border-radius: 5px;
}

.column {
    float: left;
    width: 50%;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

.row-form {
    display: flex;
    flex-wrap: wrap;
    margin-right: -.75rem;
    margin-top: 10px;
}

.fa-play {
    position: absolute;
    top: 50%;
    left: 45%;
    font-size: xx-large;
    color: #2e59d9;
}

.img-profile img {
    max-height: 50%;
    max-width: 50%;
}

.profile-img {
    text-align: center;
    display: block;
    width: 100%;
    padding-top: 16px;
}

#Reason {
    resize: none;
}

.top-space {
    margin-top: 5px;
}

.lb {
    top: 5px;
}

.text-after-checkbox {
    padding-top: 4px;
}

.row-add {
    padding: 5px;
    border: 1px solid #d1d3e2;
    border-radius: 5px;
    overflow: auto;
}

.pagination-container li {
    padding: 6px;
    text-align: center;
}

.remark {
    border-radius: 4px;
    border: 1px solid #d1d3e2;
    color: #858796;
    width: 300px;
}

.remark-1 {
    width: 100%;
}

#txtSearch {
    border-bottom-left-radius: 5px !important;
    border-top-left-radius: 5px !important;
}

.red {
    color: red;
}

.info-required {
    padding-left: 5px;
    padding-top: 5px;
}

.delete-items {
    color: red;
    cursor: pointer;
}

    .delete-items:hover {
        background: #eaecf4;
        color: red;
    }

.slide-container {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
}

.slide-list {
    width: 100%;
    width: 100%;
    overflow: hidden;
}

.slide {
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0;
    visibility: hidden;
}

    .slide.active {
        opacity: 1;
        visibility: visible;
    }

.button-move-slide span {
    color: white;
    font-size: 60px;
}

span#btn-prev {
    position: absolute;
    top: 50%;
    left: 10px;
    z-index: 10;
    cursor: pointer;
}

span#btn-next {
    position: absolute;
    top: 40%;
    right: 10px;
    z-index: 10;
    cursor: pointer;
}

.button-container {
    margin-bottom: 5px;
}

.radio-container {
    margin-bottom: 6px;
}

.radio-button {
    margin-left: 5px;
    margin-right: 10px;
    margin-top: 8px;
    color: #393939;
}

.radio {
    margin-right: 2px;
}

.above-table {
    margin-top: 10px;
    margin-bottom: 8px;
}

.btn-primary, .btn-success, .btn-white {
    color: white !important;
    cursor: pointer;
}

.pointer {
    cursor: pointer;
}

.table-header-items {
    background-color: #4e73df;
    color: white;
}

.fa-check-square, .fa-question {
    color: dodgerblue;
}

.fa-times {
    color: white;
}

.delete-items, .delete-date-items {
    margin-bottom: 0px !important;
}

.container-guest {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 5px;
    padding-top: 6px;
    cursor: pointer;
    font-size: .9rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

    /* Hide the browser's default checkbox */
    .container-guest input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

/* Create a custom checkbox */
.checkmark {
    border: 1px solid #d1d3e2;
    border-radius: 3px;
    position: absolute;
    top: 4px;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container-guest:hover input ~ .checkmark {
    background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container-guest input:checked ~ .checkmark {
    background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.container-guest input:checked ~ .checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.container-guest .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.align-left {
    text-align: left;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
namespace Assets.Model.EF
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using System.DirectoryServices.AccountManagement;

    public partial class AssetDbContext : DbContext
    {
        public AssetDbContext()
            : base("name=AssetDbContext")
        {
        }

        #region ConnectDomain
        public string Host = System.Configuration.ConfigurationManager.AppSettings["AuthencationHost"];
        public string Domain = System.Configuration.ConfigurationManager.AppSettings["AuthencationDomain"];

        public string UserID { get; set; }
        public string Password { get; set; }

        public bool IsValid()
        {
            using (PrincipalContext pc = new PrincipalContext(ContextType.Domain, this.Host))
            {
                // validate the credentials
                bool isValid = pc.ValidateCredentials(this.UserID, this.Password);

                return isValid;
            }
        }
        #endregion 

        public virtual DbSet<Booking_Laptop> Booking_Laptop { get; set; }
        public virtual DbSet<Booking_Laptop_Items> Booking_Laptop_Items { get; set; }
        public virtual DbSet<Laptops> Laptops { get; set; }
        public DbSet<Roles> Roles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Team> Teams { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Booking_Laptop>()
                .HasMany(e => e.Booking_Laptop_Items)
                .WithOptional()
                .HasForeignKey(e => e.RequestID);

            modelBuilder.Entity<Booking_Laptop>()
            .Property(e => e.FullName)
            .IsUnicode(true);

            modelBuilder.Entity<Booking_Laptop>()
            .Property(e => e.Reason)
            .IsUnicode(true);

            modelBuilder.Entity<Booking_Laptop>()
            .Property(e => e.CreatedBy)
            .IsUnicode(true);

            modelBuilder.Entity<Booking_Laptop>()
            .Property(e => e.ModifiedBy)
            .IsUnicode(true);

            modelBuilder.Entity<Booking_Laptop_Items>()
            .Property(e => e.Item)
            .IsUnicode(true);

            modelBuilder.Entity<Booking_Laptop_Items>()
            .Property(e => e.BookingApprovedBy)
            .IsUnicode(true);

            modelBuilder.Entity<Booking_Laptop_Items>()
            .Property(e => e.ReturnApprovedBy)
            .IsUnicode(true);

            modelBuilder.Entity<Roles>()
                .Property(e => e.Name)
                .IsUnicode(true);

            modelBuilder.Entity<Team>()
                .Property(e => e.Name)
                .IsUnicode(true);

            modelBuilder.Entity<Laptops>()
            .Property(e => e.Name)
            .IsUnicode(true);

            modelBuilder.Entity<Laptops>()
            .Property(e => e.CreatedBy)
            .IsUnicode(true);

            modelBuilder.Entity<Laptops>()
            .Property(e => e.ModifiedBy)
            .IsUnicode(true);

            modelBuilder.Entity<Users>()
            .Property(e => e.FullName)
            .IsUnicode(true);
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
namespace Assets.Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Booking_Laptop
    {
        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        //public Booking_Laptop()
        //{
        //    Booking_Laptop_Items = new HashSet<Booking_Laptop_Items>();
        //}

        public int ID { get; set; }

        [StringLength(10)]
        public string EmpCode { get; set; }

        public string FullName { get; set; }

        [StringLength(20)]
        public string Position { get; set; }

        [StringLength(20)]
        public string Team { get; set; }

        public string Reason { get; set; }

        public bool? IsOverDue { get; set; }

        public bool? Cancel { get; set; }

        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy hh:mm tt}")]
        public DateTime? CreatedDate { get; set; }

        public string CreatedBy { get; set; }

        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy hh:mm tt}")]
        public DateTime? ModifiedDate { get; set; }

        public string ModifiedBy { get; set; }

        public ICollection<Booking_Laptop_Items> Booking_Laptop_Items { get; set; }
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
namespace Assets.Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Booking_Laptop_Items
    {
        public int ID { get; set; }

        public int? LaptopID { get; set; }

        public int? RequestID { get; set; }

        public string Item { get; set; }

        public string Serial { get; set; }

        public string BookingDate { get; set; }

        public string BookingTime { get; set; }

        public string ReturnDate { get; set; }

        public string ReturnTime { get; set; }

        public bool? IsOverDue { get; set; }

        public string BookingApprovedBy { get; set; }

        public bool? BookingApprovedStatus { get; set; }

        public string BookingApprovedRemark { get; set; }

        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy hh:mm tt}")]
        public DateTime? BookingApprovedDate { get; set; }

        public string ReturnApprovedBy { get; set; }

        public bool? ReturnApprovedStatus { get; set; }

        public string ReturnApprovedRemark { get; set; }

        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy hh:mm tt}")]
        public DateTime? ReturnApprovedDate { get; set; }

        //public virtual Booking_Laptop Booking_Laptop { get; set; }
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
using Assets.Model.EF;
using Assets.Web.Common;
using Assets.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Assets.Web.Controllers
{
    public class AssetController : BaseController
    {
        private AssetDbContext dbContext;

        public AssetController()
        {
            dbContext = new AssetDbContext();
        }

        // GET: Asset
        /// <summary>
        /// Hàm show dữ liệu sử dụng ajax
        /// </summary>
        /// <param name="searchString"></param>
        /// <param name="page"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult FetchData()
        {
            var currentRole = (HttpContext.User as CustomPrincipal).PriorityRole;

            var user = (UserLogin)Session[CommonConstants.USER_SESSION];

            var model = dbContext.Laptops.Where(b => currentRole >= 2).OrderByDescending(x => x.ID).ToList();

            return Json(new { data = model, currentRole, recordsTotal = dbContext.Laptops.Count(), recordsFiltered = model.Count() });
        }

        /// <summary>
        /// Phương thức load view form tạo mới
        /// </summary>
        /// <returns></returns>
        [AuthorizeUser(AccessLevel = 2)]
        [HttpPost]
        public ActionResult Create(Laptops model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return Content("Bạn cần nhập đầy đủ thông tin");
                }

                model.CreatedDate = DateTime.Now;
                var user = (UserLogin)Session[CommonConstants.USER_SESSION];
                model.CreatedBy = user.EmpCode + "|" + user.FullName;

                var lap = dbContext.Laptops.Add(model);
                dbContext.SaveChanges();
                return Content("Success");
            }
            catch (Exception ex)
            {
                return Content("Lỗi trong quá trình xử lý");
            }
        }

        [AuthorizeUser(AccessLevel = 2)]
        [HttpGet]
        public ActionResult Delete(int id)
        {
            var lap = dbContext.Laptops.FirstOrDefault(t => t.ID == id);
            dbContext.Laptops.Remove(lap);

            dbContext.SaveChanges();

            return Content("Success");
        }

        /// <summary>
        /// Phương thức load view sửa
        /// </summary>
        /// <returns></returns>
        /// 
        [AuthorizeUser(AccessLevel = 2)]
        [HttpGet]
        public JsonResult Detail(int id)
        {
            var lap = dbContext.Laptops.Find(id);
            return Json(new { data = lap, status = true }, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// Phương thức sửa cho PIC
        /// </summary>
        /// <param name="go_Out"></param>
        /// <returns></returns>
        /// 
        [AuthorizeUser(AccessLevel = 2)]
        [HttpPost]
        public ActionResult Edit(Laptops model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return Content("Dữ liệu nhập vào không đúng");
                }

                var user = (UserLogin)Session[CommonConstants.USER_SESSION];

                var lap = dbContext.Laptops.FirstOrDefault(t => t.ID == model.ID);
                lap.ModifiedBy = user.EmpCode + "|" + user.FullName;
                lap.ModifiedDate = DateTime.Now;
                lap.Name = model.Name;
                lap.Serial = model.Serial;
                lap.IsActive = model.IsActive;
                lap.Status = model.Status;
                lap.Battery = model.Battery;
                lap.Charger = model.Charger;
                lap.Mouse = model.Mouse;

                dbContext.SaveChanges();

                return Content("Success");
            }
            catch (System.Exception ex)
            {
                return Content("Lỗi trong quá trình xử lý");
            }
        }

        /// <summary>
        /// Hàm show danh sách vật tư
        /// </summary>
        /// <param name="searchString"></param>
        /// <param name="page"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        public ActionResult ListEquipment()
        {
            return View();
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
using Assets.Model.EF;
using Assets.Web.Common;
using Assets.Web.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Assets.Web.Controllers
{
    public class OrderController : BaseController
    {
        private AssetDbContext dbContext;

        public OrderController()
        {
            dbContext = new AssetDbContext();
        }

        // GET: Asset
        /// <summary>
        /// Hàm show dữ liệu sử dụng ajax
        /// </summary>
        /// <param name="searchString"></param>
        /// <param name="page"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        public ActionResult Index()
        {
            var lap = dbContext.Laptops.ToList();
            ViewBag.Free = lap.Where(t => (t.IsActive == null || t.IsActive == false) && t.Status != 0);
            ViewBag.Active = lap.Where(t => (t.IsActive == true) && t.Status != 0);
            ViewBag.Break = lap.Where(t => t.Status == 0);
            ViewBag.CountFree = lap.Where(t => (t.IsActive == null || t.IsActive == false) && t.Status != 0).Count();
            ViewBag.CountActive = lap.Where(t => (t.IsActive == true) && t.Status != 0).Count();
            ViewBag.CountBreak = lap.Where(t => t.Status == 0).Count();
            return View();
        }

        [HttpPost]
        public ActionResult FetchData()
        {
            var currentRole = (HttpContext.User as CustomPrincipal).PriorityRole;

            var items = dbContext.Booking_Laptop_Items.ToList();

            var user = (UserLogin)Session[CommonConstants.USER_SESSION];

            var model = dbContext.Booking_Laptop.Where(b => currentRole >= 1).OrderByDescending(x => x.ID).ToList();

            return Json(new { data = model, items, currentRole, recordsTotal = dbContext.Booking_Laptop.Count(), recordsFiltered = model.Count() });
        }

        [AuthorizeUser(AccessLevel = 1)]
        [HttpPost]
        public ActionResult Create(Booking_Laptop model)
        {
            if (!ModelState.IsValid)
            {
                return Content("Bạn cần nhập đầy đủ các thông tin");
            }

            model.CreatedDate = DateTime.Now;
            var user = (UserLogin)Session[CommonConstants.USER_SESSION];
            model.CreatedBy = user.EmpCode + "|" + user.FullName;

            var booking = dbContext.Booking_Laptop.Add(model);
            dbContext.SaveChanges();
            return Content("Success");
        }

        /// <summary>
        /// Show danh sách phê duyệt cho ITT
        /// </summary>
        /// <param name="name"></param>
        /// <param name="from"></param>
        /// <param name="to"></param>
        /// <param name="team"></param>
        /// <param name="empcode"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult FetchApproveData()
        {
            var user = (UserLogin)Session[CommonConstants.USER_SESSION];
            var res = new List<Booking_Laptop>();

            var isAdmin = (HttpContext.User as CustomPrincipal).PriorityRole >= 2;

            res = dbContext.Booking_Laptop
           .Where(bl => dbContext.Booking_Laptop_Items.Any(i => i.RequestID == bl.ID && i.ReturnApprovedStatus == null) && (isAdmin))
           .OrderByDescending(x => x.ID)
           .ToList();

            var recordNumber = dbContext.Booking_Laptop.Count();
            return Json(new { data = res, recordsTotal = recordNumber, recordsFiltered = recordNumber });
        }

        [AuthorizeUser(AccessLevel = 2)]
        public ActionResult ApproveDetail(int id)
        {
            var booking = dbContext.Booking_Laptop.Find(id);
            var bookingItems = dbContext.Booking_Laptop_Items.Where(t => t.RequestID == id).OrderByDescending(t => t.ID).ToList();
            booking.Booking_Laptop_Items = bookingItems;
            return View(booking);
        }

        [AuthorizeUser(AccessLevel = 2)]
        public ActionResult Approve()
        {
            return View();
        }

        [AuthorizeUser(AccessLevel = 2)]
        [HttpPost]
        public ActionResult BookingApprove(int id, int itemId, string remark, bool status)
        {
            var bookingItems = dbContext.Booking_Laptop_Items.Find(itemId);
            var user = (UserLogin)Session[CommonConstants.USER_SESSION];
            bookingItems.BookingApprovedBy = user.EmpCode + "|" + user.FullName;
            bookingItems.BookingApprovedDate = DateTime.Now;
            bookingItems.BookingApprovedRemark = remark;
            bookingItems.BookingApprovedStatus = status;

            dbContext.SaveChanges();
            return Content(JsonConvert.SerializeObject(bookingItems), "application/json");
        }

        [AuthorizeUser(AccessLevel = 2)]
        [HttpPost]
        public ActionResult ReturnApprove(int id, int itemId, string remark, bool status)
        {
            var bookingItems = dbContext.Booking_Laptop_Items.Find(itemId);
            var user = (UserLogin)Session[CommonConstants.USER_SESSION];
            bookingItems.ReturnApprovedBy = user.EmpCode + "|" + user.FullName;
            bookingItems.ReturnApprovedDate = DateTime.Now;
            bookingItems.ReturnApprovedRemark = remark;
            bookingItems.ReturnApprovedStatus = status;

            dbContext.SaveChanges();
            return Content(JsonConvert.SerializeObject(bookingItems), "application/json");
        }

        public ActionResult Detail(int id)
        {
            var booking = dbContext.Booking_Laptop.Find(id);
            var bookingItems = dbContext.Booking_Laptop_Items.Where(t => t.RequestID == id).ToList();
            booking.Booking_Laptop_Items = bookingItems;
            return View(booking);
        }

        [AuthorizeUser(AccessLevel = 2)]
        [HttpGet]
        public ActionResult Delete(int id)
        {
            var bookingItems = dbContext.Booking_Laptop_Items.Where(t => t.RequestID == id).ToList();
            dbContext.Booking_Laptop_Items.RemoveRange(bookingItems);

            var booking = dbContext.Booking_Laptop.FirstOrDefault(t => t.ID == id);
            dbContext.Booking_Laptop.Remove(booking);

            dbContext.SaveChanges();

            return Content("Success");
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
using Assets.Model.EF;
using Assets.Web.Common;
using Assets.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Assets.Web.Controllers
{
    public class HomeController : BaseController
    {
        private AssetDbContext dbContext;
        public HomeController()
        {
            dbContext = new AssetDbContext();
        }

        /// <summary>
        /// Phương thức load danh sách 4 hạng mục
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            //Hạng mục Laptop đang free, active, quá hạn, hỏng
            var lap = dbContext.Laptops.ToList();
            ViewBag.Free = lap.Where(t => (t.IsActive == null || t.IsActive == false) && t.Status != 0);
            ViewBag.Active = lap.Where(t => (t.IsActive == true) && t.Status != 0);
            ViewBag.Break = lap.Where(t => t.Status == 0);
            ViewBag.CountFree = lap.Where(t => (t.IsActive == null || t.IsActive == false) && t.Status != 0).Count();
            ViewBag.CountActive = lap.Where(t => (t.IsActive == true) && t.Status != 0).Count();
            ViewBag.CountBreak = lap.Where(t => t.Status == 0).Count();
            return View();
        }

        [AuthorizeUser(AccessLevel = 1)]
        [HttpPost]
        public ActionResult Create(Booking_Laptop model)
        {
            if (!ModelState.IsValid)
            {
                return Content("Bạn cần nhập đầy đủ các thông tin");
            }

            model.CreatedDate = DateTime.Now;
            var user = (UserLogin)Session[CommonConstants.USER_SESSION];
            model.CreatedBy = user.EmpCode + "|" + user.FullName;

            var booking = dbContext.Booking_Laptop.Add(model);
            dbContext.SaveChanges();
            return Content("Success");
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////Order/Index
@{
    ViewBag.Title = "Danh sách mượn máy tính";
    Layout = "~/Views/Shared/_Layout.cshtml";
}

@section styles{
    <link href="~/adminlte/css/jquery-datatables.min.css" rel="stylesheet" />
    <link href="~/adminlte/css/jquery-confirm.css" rel="stylesheet" />
    <link href="~/adminlte/css/customize.css" rel="stylesheet" />
    <style>
        .content-wrapper > .content {
            padding: 0 0 !important;
        }

        #equip-table_info {
            margin-left: 10px;
        }

        #equip-table_paginate {
            margin-right: 10px;
        }

        #equip-table_filter {
            display: none;
        }

        .btn-delete:hover, .btn-edit:hover {
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
        }

        label {
            font-weight: 500 !important;
            font-size: 0.9rem;
        }
    </style>
}

<div class="content-wrapper" style="margin-left:0">
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="card">
                <!-- /.card-header -->
                <div class="card-body">
                    <div class="row" style="padding-bottom: 10px">
                        <div class="col-10">
                            <button id="btn-add" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#registerModal">
                                <i class="fas fa-edit"></i> Thêm mới
                            </button>
                        </div>
                        <div class="col-2 input-group input-group-sm">
                            <b><span class="no-margin-bottom" style="padding-top: 5px">Tìm kiếm chung</span></b>
                            &nbsp;
                            <input class="form-control bg-light to-date" type="text" id="search-all" autocomplete="off" />
                        </div>
                    </div>
                    <div style="overflow-x: auto; border: 1px solid #dee2e6 ">
                        <table id="equip-table" class="table table-bordered table-hover" style="width:100% !important">
                            <thead style="background:#17a2b8; color:white; text-align:center">
                                <tr>
                                    <th>ID</th>
                                    <th>Nhân viên</th>
                                    <th>Phòng ban</th>
                                    <th>Chức danh</th>
                                    <th>Lí do</th>
                                    <th>Thao tác</th>
                                    <th>Chi tiết</th>
                                    <th>Ngày tạo</th>
                                    <th>Chỉnh sửa</th>
                                </tr>
                            </thead>
                            <tbody id="tblData"></tbody>
                        </table>
                    </div>
                </div>
                <div id="pagination" class="pagination"></div>
            </div>
        </div>
    </section>

    <!--Register Modal -->
    <div class="modal fade" id="registerModal" role="dialog">
        <div class="modal-dialog modal-xl">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" style="color:dodgerblue">Đăng ký thiết bị</h4>
                    <button type="button" class="close" data-dismiss="modal" style="color:red">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="col-md-12 row-form">
                        <div class="column form-horizontal form-left col-md-7">
                            <div class="form-group row-1 input-group">
                                <label class="control-label col-2 lb">Mã CNV <span class="red">(*)</span></label>
                                <div class="col-md-4 input-group input-group-sm">
                                    <input class="form-control input-previous-button col-md-12" id="txtEmpCodeCreate" maxlength="8" autocomplete="off" />
                                </div>
                            </div>
                            <div class="form-group input-group">
                                <label class="control-label col-md-2 top-space">Lý do <span class="red">(*)</span></label>
                                <div class="col-md-10 input-group-sm">
                                    <textarea class="form-control col-md-12" style="resize: none" id="reason-create"></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="column col-md-1 col-mid"></div>

                        <!--Cột bên phải dành cho thông tin nhân viên-->
                        <div class="column form-horizontal form-right col-md-4">
                            <!--Ảnh profile-->
                            <div class="form-group col-12 profile-img">
                                <div class="img-profile">
                                    <img id="img-profile-create" src="~/adminlte/img/the-world.jpg" />
                                </div>
                            </div>
                            <!--Thông tin profile-->
                            <div class="form-group input-group input-group-sm">
                                <label class="col-3 top-space" for="FullName">Họ và tên</label>
                                <input readonly class="form-control col-9 input-previous-button" id="txtFullNameCreate" />
                            </div>
                            <div class="form-group input-group input-group-sm">
                                <label class="col-3 top-space" for="Positon">Vị trí</label>
                                <input readonly class="form-control col-9 input-previous-button" id="txtPositionCreate" />
                            </div>
                            <div class="form-group input-group input-group-sm">
                                <label class="col-3 top-space" for="Positon">Phòng ban</label>
                                <input readonly class="form-control col-9 input-previous-button" id="txtTeamCreate" />
                            </div>
                        </div>
                    </div>
                    <div class="note col-12">
                        <label class="control-label" style="color: dodgerblue"><u>Lưu ý</u>: <span style="color: #858796">&nbsp;Các trường <span style="color:red">(*)</span> bắt buộc phải nhập đầy đủ.</span></label>
                    </div>
                    <!--Đăng ký danh sách thiết bị-->
                    <div class="bottom">
                        <div class="form-horizontal col-12 row-add" style="width: 100%">
                            <div class="items-container">
                                <table class="table-bordered table table-hover table-sm" id="lap-items-create" style="font-family:Source Sans Pro">
                                    <thead style="text-align:center; font-size:0.9rem">
                                        <tr class="table-header-items">
                                            <th></th>
                                            <th>Máy tính <span class="red">(*)</span></th>
                                            <th>Chuột</th>
                                            <th>Sạc</th>
                                            <th>Pin</th>
                                            <th colspan="2">Thời gian mượn máy <span class="red">(*)</span></th>
                                            <th colspan="2">Thời gian trả máy <span class="red">(*)</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="row-items">
                                            <td>
                                                <label class="control-label btn btn-sm delete-items"><i class="fas fa-times-circle" style="color:red"></i></label>
                                            </td>
                                            <td class="input-group-sm">
                                                <select class="form-control input-previous-button laptop">
                                                    @foreach (var item in ViewBag.Free)
                                                    {
                                                        <option value="@item.ID" id="@item.ID">@item.Name</option>
                                                    }
                                                </select>
                                            </td>
                                            <td class="input-group-sm">
                                            </td>
                                            <td class="input-group-sm">
                                            </td>
                                            <td class="input-group-sm">
                                            </td>
                                            <td class="input-group-sm">
                                                <input class="form-control datepicker bookingDate" placeholder="Ngày" style="background: white" readonly autocomplete="off" />
                                            </td>
                                            <td class="input-group-sm">
                                                <input class="form-control timepicker bookingTime" placeholder="Giờ" type="time" />
                                            </td>
                                            <td class="input-group-sm">
                                                <input class="form-control datepicker returnDate" placeholder="Ngày" style="background: white" readonly autocomplete="off" />
                                            </td>
                                            <td class="input-group-sm">
                                                <input class="form-control timepicker returnTime" placeholder="Giờ" type="time" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div style="text-align: center">
                        <label id="add-row-items-create" class="btn-primary btn top-space btn-sm" title="Thêm hàng hóa khác" style="cursor: pointer; margin-top:8px;">
                            <i class="fas fa-plus"></i>&nbsp; Thêm máy
                        </label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" id="register" class="btn btn-sm btn-primary">Đăng ký</button>
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>

    <!--Edit Modal -->
    <div class="modal fade" id="editModal" role="dialog">
        <div class="modal-dialog modal-xl">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" style="color:dodgerblue">Chỉnh sửa đăng ký</h4>
                    <button type="button" class="close" data-dismiss="modal" style="color:red">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="col-md-12 row-form">
                        <div class="column form-horizontal form-left col-md-7">
                            <div class="form-group row-1 input-group">
                                <label class="control-label col-2 lb">Mã CNV <span class="red">(*)</span></label>
                                <div class="col-md-4 input-group input-group-sm">
                                    <input class="form-control input-previous-button col-md-12" id="txtEmpCodeEdit" maxlength="8" autocomplete="off" />
                                </div>
                            </div>
                            <div class="form-group input-group">
                                <label class="control-label col-md-2 top-space">Lý do <span class="red">(*)</span></label>
                                <div class="col-md-10 input-group-sm">
                                    <textarea class="form-control col-md-12" style="resize: none" id="reason-edit"></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="column col-md-1 col-mid"></div>

                        <!--Cột bên phải dành cho thông tin nhân viên-->
                        <div class="column form-horizontal form-right col-md-4">
                            <!--Ảnh profile-->
                            <div class="form-group col-12 profile-img">
                                <div class="img-profile">
                                    <img id="img-profile-edit" src="~/adminlte/img/the-world.jpg" />
                                </div>
                            </div>
                            <!--Thông tin profile-->
                            <div class="form-group input-group input-group-sm">
                                <label class="col-3 top-space" for="FullName">Họ và tên</label>
                                <input readonly class="form-control col-9 input-previous-button" id="txtFullNameEdit" />
                            </div>
                            <div class="form-group input-group input-group-sm">
                                <label class="col-3 top-space" for="Positon">Vị trí</label>
                                <input readonly class="form-control col-9 input-previous-button" id="txtPositionEdit" />
                            </div>
                            <div class="form-group input-group input-group-sm">
                                <label class="col-3 top-space" for="Positon">Phòng ban</label>
                                <input readonly class="form-control col-9 input-previous-button" id="txtTeamEdit" />
                            </div>
                        </div>
                    </div>
                    <div class="note col-12">
                        <label class="control-label" style="color: dodgerblue"><u>Lưu ý</u>: <span style="color: #858796">&nbsp;Các trường <span style="color:red">(*)</span> bắt buộc phải nhập đầy đủ.</span></label>
                    </div>
                    <!--Đăng ký danh sách thiết bị-->
                    <div class="bottom">
                        <div class="form-horizontal col-12 row-add" style="width: 100%">
                            <div class="items-container">
                                <table class="table-bordered table table-hover table-sm" id="lap-items-edit" style="font-family:Source Sans Pro">
                                    <thead style="text-align:center; font-size:0.9rem">
                                        <tr class="table-header-items">
                                            <th></th>
                                            <th>Máy tính <span class="red">(*)</span></th>
                                            <th>Chuột</th>
                                            <th>Sạc</th>
                                            <th>Pin</th>
                                            <th colspan="2">Thời gian mượn máy <span class="red">(*)</span></th>
                                            <th colspan="2">Thời gian trả máy <span class="red">(*)</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="row-items">
                                            <td>
                                                <label class="control-label btn btn-sm delete-items"><i class="fas fa-times-circle" style="color:red"></i></label>
                                            </td>
                                            <td class="input-group-sm">
                                                <select class="form-control input-previous-button laptop">
                                                    @*@foreach (var item in ViewBag.Free)
                                                        {
                                                            <option value="@item.ID" id="@item.ID">@item.Name</option>
                                                        }*@
                                                </select>
                                            </td>
                                            <td class="input-group-sm">
                                            </td>
                                            <td class="input-group-sm">
                                            </td>
                                            <td class="input-group-sm">
                                            </td>
                                            <td class="input-group-sm">
                                                <input class="form-control datepicker bookingDate" placeholder="Ngày" style="background: white" readonly autocomplete="off" />
                                            </td>
                                            <td class="input-group-sm">
                                                <input class="form-control timepicker bookingTime" placeholder="Giờ" type="time" />
                                            </td>
                                            <td class="input-group-sm">
                                                <input class="form-control datepicker returnDate" placeholder="Ngày" style="background: white" readonly autocomplete="off" />
                                            </td>
                                            <td class="input-group-sm">
                                                <input class="form-control timepicker returnTime" placeholder="Giờ" type="time" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div style="text-align: center">
                        <label id="add-row-items-edit" class="btn-primary btn top-space btn-sm" title="Thêm hàng hóa khác" style="cursor: pointer; margin-top:8px;">
                            <i class="fas fa-plus"></i>&nbsp; Thêm máy
                        </label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" id="confirm" class="btn btn-sm btn-primary">Đăng ký</button>
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>

    <!--Detail Modal -->
    <div class="modal fade" id="detailModal" role="dialog">
        <div class="modal-dialog modal-xl">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" style="color:dodgerblue">Chi tiết đăng ký</h4>
                    <button type="button" class="close" data-dismiss="modal" style="color:red">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="col-md-12 row-form">
                        <div class="column form-horizontal form-left col-md-7">
                            <div class="form-group row-1 input-group">
                                <label class="control-label col-2 lb">Mã CNV <span class="red">(*)</span></label>
                                <div class="col-md-4 input-group input-group-sm">
                                    @*<input type="hidden" id="txtID" value="@Model.ID" />*@
                                    <input class="form-control input-previous-button col-md-12" id="txtEmpCodeDetail" maxlength="8" autocomplete="off" readonly/>
                                </div>
                            </div>
                            <div class="form-group input-group">
                                <label class="control-label col-md-2 top-space">Lý do <span class="red">(*)</span></label>
                                <div class="col-md-10 input-group-sm">
                                    <textarea class="form-control col-md-12" style="resize: none" id="reason-detail" readonly></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="column col-md-1 col-mid"></div>

                        <!--Cột bên phải dành cho thông tin nhân viên-->
                        <div class="column form-horizontal form-right col-md-4">
                            <!--Ảnh profile-->
                            <div class="form-group col-12 profile-img">
                                <div class="img-profile">
                                    <img id="img-profile-detail" src="~/adminlte/img/the-world.jpg" />
                                </div>
                            </div>
                            <!--Thông tin profile-->
                            <div class="form-group input-group input-group-sm">
                                <label class="col-3 top-space" for="FullName">Họ và tên</label>
                                <input readonly class="form-control col-9 input-previous-button" id="txtFullNameDetail" @*value="@Model.FullName"*@ />
                            </div>
                            <div class="form-group input-group input-group-sm">
                                <label class="col-3 top-space" for="Positon">Vị trí</label>
                                <input readonly class="form-control col-9 input-previous-button" id="txtPositionDetail" @*value="@Model.Position"*@ />
                            </div>
                            <div class="form-group input-group input-group-sm">
                                <label class="col-3 top-space" for="Positon">Phòng ban</label>
                                <input readonly class="form-control col-9 input-previous-button" id="txtTeamDetail" @*value="@Model.Team"*@ />
                            </div>
                        </div>
                    </div>
                    <div class="note col-12">
                        <label class="control-label" style="color: dodgerblue"><u>Lưu ý</u>: <span style="color: #858796">&nbsp;Các trường <span style="color:red">(*)</span> bắt buộc phải nhập đầy đủ.</span></label>
                    </div>
                    <!--Đăng ký danh sách thiết bị-->
                    <div class="bottom">
                        <div class="form-horizontal col-12 row-add" style="width: 100%">
                            <div class="items-container">
                                <table class="table-bordered table table-hover table-sm" id="lap-items-edit" style="font-family:Source Sans Pro">
                                    <thead style="text-align:center; font-size:0.9rem">
                                        <tr class="table-header-items">
                                            <th></th>
                                            <th>Máy tính <span class="red">(*)</span></th>
                                            <th>Chuột</th>
                                            <th>Sạc</th>
                                            <th>Pin</th>
                                            <th colspan="2">Thời gian mượn máy <span class="red">(*)</span></th>
                                            <th colspan="2">Thời gian trả máy <span class="red">(*)</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="row-items">
                                            <td>
                                                <label class="control-label btn btn-sm delete-items"><i class="fas fa-times-circle" style="color:red"></i></label>
                                            </td>
                                            <td class="input-group-sm">
                                                <select class="form-control input-previous-button laptop">
                                                    @*@foreach (var item in ViewBag.Free)
                                                        {
                                                            <option value="@item.ID" id="@item.ID">@item.Name</option>
                                                        }*@
                                                </select>
                                            </td>
                                            <td class="input-group-sm">
                                            </td>
                                            <td class="input-group-sm">
                                            </td>
                                            <td class="input-group-sm">
                                            </td>
                                            <td class="input-group-sm">
                                                <input class="form-control datepicker bookingDate" placeholder="Ngày" style="background: white" readonly autocomplete="off" />
                                            </td>
                                            <td class="input-group-sm">
                                                <input class="form-control timepicker bookingTime" placeholder="Giờ" type="time" />
                                            </td>
                                            <td class="input-group-sm">
                                                <input class="form-control datepicker returnDate" placeholder="Ngày" style="background: white" readonly autocomplete="off" />
                                            </td>
                                            <td class="input-group-sm">
                                                <input class="form-control timepicker returnTime" placeholder="Giờ" type="time" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>
</div>

@section scripts{
    <script src="~/adminlte/js/sortable.js"></script>
    <script src="~/adminlte/js/jquery-confirm.js"></script>
    <script src="~/adminlte/plugins/datatables/jquery.dataTables.min.js"></script>

    <script>
        var table = null;
        $(document).ready(() => {
            var options = {
                "serverSide": false,
                "searching": true,
                "orderCellsTop": true,
                "fixedHeader": true,
                "processing": true,
                "paging": true,
                "oLanguage": {
                    "sLengthMenu": "_MENU_"
                },
                "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
                "pageLength": 15,
                "lengthChange": false,
                "ajax": {
                    "type": "POST",
                    "url": "/Order/FetchData",
                    "dataType": "json",
                    "contentType": 'application/json; charset=utf-8',

                    "dataSrc": function (res) {
                        currentRole = res.currentRole;
                        items = res.items;
                        return res.data;
                    }
                },
                "columns": [
                    {
                        data: function (res) {
                            html = '';
                            if (isOver(res, items)) {
                                html = `<span style="color:red">${res.Team}</span><span style="color:red">${res.ID}</span>`
                            } else {
                                html = `<span>${res.Team}</span><span>${res.ID}</span>`
                            }
                            return html;
                        }
                    },
                    {
                        data: function (res) {
                            html = '';
                            if (isOver(res, items)) {
                                html = `<span class="border-right" style="padding-right:10px; color:red">${res.EmpCode}</span><span style="margin-left:10px; color:red">${res.FullName}</span>`
                            } else {
                                html = `<span class="border-right" style="padding-right:10px;">${res.EmpCode}</span><span style="margin-left:10px;">${res.FullName}</span>`
                            }
                            return html;
                        }
                    },
                    {
                        data: function (res) {
                            html = '';
                            if (isOver(res, items)) {
                                html = `<span style="color:red">${res.Team}</span>`
                            } else {
                                html = `<span>${res.Team}</span>`
                            }
                            return html;
                        }
                    },
                    {
                        data: function (res) {
                            html = '';
                            if (isOver(res, items)) {
                                html = `<span style="color:red">${res.Position}</span>`
                            } else {
                                html = `<span>${res.Position}</span>`
                            }
                            return html;
                        }
                    },
                    {
                        data: function (res) {
                            html = '';
                            if (isOver(res, items)) {
                                html = `<span style="color:red">${res.Reason}</span>`
                            } else {
                                html = `<span>${res.Reason}</span>`
                            }
                            return html;
                        }
                    },
                    {
                        data: function (res) {
                            var html = '';
                            if (res.Cancel || res.Cancel != null) {
                                html = `<span class="red"><b>Hủy bỏ</b></span>`;
                            }
                            else {
                                if (res.Cancel === null) {
                                    if (res.ApprovedStatus != null && res.ApprovedStatus != 0) {
                                        html = `<a class="btn btn-cancel btn-danger btn-standard" id="btnCancel" onclick="Cancel(${res.ID})" title="Hủy bỏ">
                                                           <i class="fas fa-lock"></i>
                                                        </a>`
                                    } else {
                                        html = `<a class="btn btn-edit btnEdit" title="Sửa" data-id=${res.ID} data-toggle="modal" data-target="#editModal">
                                                           <i class="icon far fa-edit" style="color:#4caf50"></i>
                                                        </a>
                                                        <a class="btn btn-delete btnDelete" onclick="Delete(${res.ID})" title="Xóa">
                                                           <i class="icon far fa-trash-alt" style="color: red; cursor: pointer"></i>
                                                        </a>`;
                                    }
                                }
                            }
                            return html;
                        }
                    },
                    {
                        data: function (res) {
                            var html = `<a href="#" class="btn btn-edit" data-toggle="modal" data-target="#detailModal">
                                                    <i class="icon fas fa-question"></i>
                                                </a>`;
                            return html;
                        }
                    },
                    {
                        data: function (res) {
                            if (res.CreatedDate === null || res.CreatedDate === "" || typeof (res.CreatedDate) === "undefined")
                                return '';
                            var date = new Date(parseInt(res.CreatedDate.replace(/[^0-9 +]/g, '')));
                            var createdDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`;
                            return `<span class="border-right" style="padding-right:10px;">${res.CreatedBy}</span><span style="margin-left:10px;">${createdDate}</span>`;
                        }
                    },
                    {
                        data: function (res) {
                            if (res.ModifiedDate === null || res.ModifiedDate === "" || typeof (res.ModifiedDate) === "undefined")
                                return "";
                            var date = new Date(parseInt(res.ModifiedDate.replace(/[^0-9 +]/g, '')));
                            var modifiedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
                            return `<span class="border-right" style="padding-right:10px;">${res.ModifiedBy}</span ><span style="margin-left:10px;">${modifiedDate}</span>`;
                        }
                    }
                ]
            };
            table = $('#equip-table').DataTable(options);

            $('#search-all').keyup(function () {
                table.search($(this).val()).draw();
            })
        });

        $("#booking").removeClass('collapse');
        $("#booking").removeClass('collapsed');
        $("#list-booking").addClass('active');
        $("#li-booking").addClass('menu-open');
    </script>

    <script>
        //Create
        $('#register').on("click", (event) => {
            event.preventDefault();
            var obj = {};
            obj.EmpCode = $('#txtEmpCodeCreate').val();
            obj.FullName = $('#txtFullNameCreate').val();
            obj.Position = $('#txtPositionCreate').val();
            obj.Team = $('#txtTeamCreate').val();
            obj.Reason = $('#reason-create').val();
            obj.Booking_Laptop_Items = [];

            $(".row-items").each((index, item) => {
                var objItem = {};
                objItem.Item = $(item).find('input[class*=laptop]').val();
                objItem.BookingDate = $(item).find('input[class*=bookingDate]').val();
                objItem.BookingTime = $(item).find('input[class*=bookingTime]').val();
                objItem.ReturnDate = $(item).find('input[class*=returnDate]').val();
                objItem.ReturnTime = $(item).find('input[class*=returnTime]').val();

                obj.Booking_Laptop_Items.push(objItem);
            });

            $.confirm({
                title: "Thông báo",
                content: function () {
                    var self = this;
                    return $.ajax({
                        url: "/Order/Create",
                        method: "POST",
                        data: obj,
                        success: function (mess) {
                            if (mess === "Success") {
                                window.location.href = "/Order/Index"
                            }
                            else {
                                self.setContent(mess);
                            }
                        }
                    })
                }
            })
        })
    </script>

    <script>
        //user
        var _user = {
            init: function () {
                _user.registerEvent();
            },
            registerEvent: function () {
                _user.getUser();
            },
            getUser: function () {
                var empCode = $("#txtEmpCodeCreate").val();
                $.ajax({
                    url: '/User/GetUserByCode?empCode=' + empCode,
                    type: "GET",
                    dataType: 'json',
                    success: function (reponse) {
                        console.log(reponse.data);
                        if (reponse.status) {
                            $('#txtFullNameCreate').val(reponse.data.FullName);
                            $('#txtPositionCreate').val(reponse.data.Position);
                            $('#txtTeamCreate').val(reponse.data.Team.Name);
                        } else {
                            alert("Mã nhân viên không tồn tại");
                        }
                    },
                    error: function () {
                        $('#txtFullNameCreate').val('');
                        $('#txtPositionCreate').val('');
                        $('#txtTeamCreate').val('');
                    }
                });
            }
        }
        _user.init();

        //Nhận sự kiện getUser khi gõ 7, 8 số
        $('#txtEmpCodeCreate').keyup(function () {
            var count = $('#txtEmpCodeCreate').val().length;
            if (count == 7 || count == 8) {
                _user.getUser();
            } else {
                $('#txtFullNameCreate').val('');
                $('#txtPositionCreate').val('');
                $('#txtTeamCreate').val('');
            }
        });
    </script>

    <script>
        var date = new Date();
        var day = date.getDate(),
            hour = date.getHours(),
            min = date.getMinutes();
        day = (day < 10 ? "0" : "") + day;
        hour = (hour < 10 ? "0" : "") + hour;
        min = (min < 10 ? "0" : "") + min;
        displayTime = hour + ":" + min;
        var x = document.getElementsByClassName("returnTime");
        var y = document.getElementsByClassName("bookingTime");
        for (var i = 0, length = x.length; i < length; i++) {
            x[i].value = displayTime;
        };
        for (var i = 0, length = y.length; i < length; i++) {
            y[i].value = displayTime;
        };

        $("#add-row-items-create").off('click').on('click', function (e) {
            var html = `<tr class="row-items">
                            <td>
                                <label class="control-label btn btn-sm delete-items"><i class="fas fa-times-circle" style="color:red"></i></label>
                            </td>
                            <td class="input-group-sm">
                                <select class="form-control input-previous-button laptop">
                                    @foreach (var item in ViewBag.Free)
                                    {
                                        <option value="@item.ID" id="@item.ID">@item.Name</option>
                                    }
                                </select>
                            </td>
                            <td class="input-group-sm">
                            </td>
                            <td class="input-group-sm">
                            </td>
                            <td class="input-group-sm">
                            </td>
                            <td class="input-group-sm">
                                <input class="form-control datepicker bookingDate" placeholder="Ngày" style="background: white" readonly autocomplete="off" />
                            </td>
                            <td class="input-group-sm">
                                <input class="form-control timepicker bookingTime" placeholder="Giờ" type="time" />
                            </td>
                            <td class="input-group-sm">
                                <input class="form-control datepicker returnDate" placeholder="Ngày" style="background: white" readonly autocomplete="off"/>
                            </td>
                            <td class="input-group-sm">
                                <input class="form-control timepicker returnTime" placeholder="Giờ" type="time"/>
                            </td>
                        </tr>`;
            $('#lap-items-create > tbody:last-child').append(html);
            $('.datepicker').datepicker({
                dateFormat: 'dd/mm/yy'
            });
            $("#lap-items-create").on("click", ".delete-items", function () {
                $(this).closest(".row-items").remove();
            });
            var date = new Date();
            var day = date.getDate(),
                hour = date.getHours(),
                min = date.getMinutes();
            day = (day < 10 ? "0" : "") + day;
            hour = (hour < 10 ? "0" : "") + hour;
            min = (min < 10 ? "0" : "") + min;
            displayTime = hour + ":" + min;
            var x = document.getElementsByClassName("returnTime");
            var y = document.getElementsByClassName("bookingTime");
            for (var i = 0, length = x.length; i < length; i++) {
                x[i].value = displayTime;
            };
            for (var i = 0, length = y.length; i < length; i++) {
                y[i].value = displayTime;
            }
        });
        $("#lap-items-create").on("click", ".delete-items", function () {
            $(this).closest(".row-items").remove();
        });
        $('.datepicker').datepicker({
            dateFormat: 'dd/mm/yy'
        });
    </script>

    <script>
        ///Lấy ra hàng hóa quá hạn
        function isOver(data, items) {
            const obj = items.find(t => (t.RequestID === data.ID && t.ReturnDate !== null && t.ReturnApprovedStatus == null && new Date(`${t.ReturnDate.split('/')[1]}/${t.ReturnDate.split('/')[0]}/${t.ReturnDate.split('/')[2]}`).getTime() - new Date(`${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`).getTime() < 0))
            return !!obj
        }

        function Delete(id) {
            $.confirm({
                title: 'Xác nhận!',
                content: 'Bạn có chắc muốn xóa?',
                buttons: {
                    confirm: async function () {
                        await $.ajax({
                            url: "/Order/Delete/" + id,
                            method: "GET",
                            success: function () {
                                window.location.reload();
                            }
                        })
                    },
                    cancel: function () {
                        //$.alert('Hủy bỏ!');
                    }
                }
            });
        }

        function Cancel(id) {
            $.confirm({
                title: 'Xác nhận!',
                content: 'Bạn có chắc muốn hủy?',
                buttons: {
                    confirm: async function () {
                        await $.ajax({
                            url: "/Order/Cancel/" + id,
                            method: "GET",
                            success: function () {
                                window.location.reload();
                            }
                        })
                    },
                    cancel: function () {
                        //$.alert('Hủy bỏ!');
                    }
                }
            });
        }
    </script>

    <script>
        $('#open-free-lap').on("click", (event) => {
            $("#tbl-free-lap").removeClass('collapse');
            $("#tbl-active-lap").addClass('collapse');
            $("#tbl-break-lap").addClass('collapse');
            $("#tbl-overdue-lap").addClass('collapse');
        });

        $('#open-active-lap').on("click", (event) => {
            $("#tbl-active-lap").removeClass('collapse');
            $("#tbl-free-lap").addClass('collapse');
            $("#tbl-break-lap").addClass('collapse');
            $("#tbl-overdue-lap").addClass('collapse');
        });

        $('#open-break-lap').on("click", (event) => {
            $("#tbl-break-lap").removeClass('collapse');
            $("#tbl-active-lap").addClass('collapse');
            $("#tbl-free-lap").addClass('collapse');
            $("#tbl-overdue-lap").addClass('collapse');
        });
    </script>
}
/////////////////////////////////////////////////////////////////////////////////////////////////////ApproveDetail
@model Assets.Model.EF.Booking_Laptop
@{
    ViewBag.Title = "Phòng IT phê duyệt mượn trả";
    Layout = "~/Views/Shared/_Layout.cshtml";
}

@section styles{
    <link href="~/adminlte/css/jquery-datatables.min.css" rel="stylesheet" />
    <link href="~/adminlte/css/jquery-confirm.css" rel="stylesheet" />
    <link href="~/adminlte/css/customize.css" rel="stylesheet" />
    <style>
        .content-wrapper > .content {
            padding: 0 0 !important;
        }

        #equip-table_info {
            margin-left: 10px;
        }

        #equip-table_paginate {
            margin-right: 10px;
        }

        #equip-table_filter {
            display: none;
        }

        .btn-delete:hover, .btn-edit:hover {
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
        }

        label {
            font-weight: 500 !important;
            font-size: 0.9rem;
        }
    </style>
}

<div class="form-horizontal">
    <!--Cột bên trái dành cho form đăng ký-->
    <div class="col-md-12 row-form">
        <div class="column form-horizontal form-left col-md-7">
            <div class="form-group row-1 input-group">
                <label class="control-label col-md-2 lb">Mã CNV</label>
                <div class="col-md-3 input-group input-group-sm">
                    <input type="hidden" id="goOutID" value="@Model.ID" />
                    <input class="form-control input-previous-button col-md-12" id="txtEmpCodeGO" readonly value="@Model.EmpCode" />
                </div>
            </div>

            <div class="form-group input-group">
                <label class="control-label col-md-2">Lý do</label>
                <div class="col-md-10 input-group-sm">
                    <textarea class="form-control col-md-12" style="resize: none" readonly>@Model.Reason</textarea>
                </div>
            </div>
        </div>

        <div class="column col-md-1 col-mid"></div>


        <!--Cột bên phải dành cho thông tin nhân viên-->
        <div class="column form-horizontal form-right col-md-4">
            <!--Ảnh profile-->
            <div class="form-group col-12 profile-img">
                <div class="img-profile">
                    <img id="img-profile" src="~/Assets/img/the-world.jpg" />
                </div>
            </div>
            <!--Thông tin profile-->
            <div class="form-group input-group profile input-group-sm">
                <label class="control-label col-md-3">Họ và tên</label>
                <input readonly class="form-control input-previous-button col-9 " id="txtFullName" value="@Model.FullName" />
            </div>
            <div class="form-group input-group profile input-group-sm">
                <label class="control-label col-md-3">Vị trí</label>
                <input readonly class="form-control input-previous-button col-9 " id="txtPosition" value="@Model.Position" />
            </div>
            <div class="form-group input-group profile input-group-sm">
                <label class="control-label col-md-3">Phòng ban</label>
                <input readonly class="form-control input-previous-button col-9 " id="txtTeam" value="@Model.Team" />
            </div>
        </div>
    </div>
</div>

<br />

<section class="content">
    <div class="container-fluid">
        <div class="card">
            <!-- /.card-header -->
            <div class="card-body">
                <div style="width:100%; overflow-x:auto">
                    <!--Bảng dữ liệu Về sớm-->
                    <table class="table table-hover table-bordered" id="approve-table">
                        <!--Tiêu đề cột-->
                        <thead>
                            <tr class="table-heading" style="background: #17a2b8;text-align: center">
                                <td>ID</td>
                                <th>Tên máy</th>
                                <th>Thời gian mượn máy</th>
                                <th colspan="4">ITT phê duyệt mượn</th>
                                <th>Thời gian trả máy</th>
                                <th colspan="4">ITT phê duyệt trả</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach (var item in Model.Booking_Laptop_Items)
                            {
                                <tr>
                                    <td>@item.ID</td>
                                    <td>
                                        <input type="hidden" class="itemId" value="@item.ID" />
                                        @item.Item
                                    </td>
                                    <td>
                                        <span>@item.BookingDate  @item.BookingTime</span>
                                    </td>
                                    @if (string.IsNullOrEmpty(item.BookingApprovedBy))
                                    {
                                        <td>@item.BookingApprovedBy</td>
                                        <td>@item.BookingApprovedDate</td>
                                        <td>
                                            <a class="btn btn-edit btn-admin-approve approve" title="Phê duyệt" onclick="handleApproveBook(@item.ID)"><i class="fas fa-check" style="color: dodgerblue"></i></a>
                                            <a class="btn btn-edit btn-admin-reject unapprove" title="Không phê duyệt" onclick="handleUnapproveBook(@item.ID)"><i class="fas fa-times" style="color: red"></i></a>
                                        </td>
                                        <td><input id="remark-@item.ID-book" class="remark remark-1 col-12" type="text" placeholder="Ghi chú..." /></td>
                                    }
                                    else
                                    {
                                        <td>@item.BookingApprovedBy</td>
                                        <td>@item.BookingApprovedDate</td>
                                        if (item.BookingApprovedStatus == false)
                                        {
                                            <td><i class="fas fa-times" style="color: red" title="Không phê duyệt"></i></td>
                                        }
                                        else
                                        {
                                            <td><i class="fas fa-check-square" title="Đã phê duyệt"></i></td>
                                        }
                                        <td>@item.BookingApprovedRemark</td>
                                    }
                                    <td>
                                        <span>@item.ReturnDate  @item.ReturnTime</span>
                                    </td>
                                    @if (string.IsNullOrEmpty(item.ReturnApprovedBy))
                                    {
                                        <td>@item.ReturnApprovedBy</td>
                                        <td>@item.ReturnApprovedDate</td>
                                        <td>
                                            <a class="btn btn-edit btn-admin-approve approve" title="Phê duyệt" onclick="handleApproveReturn(@item.ID)"><i class="fas fa-check" style="color: dodgerblue"></i></a>
                                            <a class="btn btn-edit btn-admin-reject unapprove" title="Không phê duyệt" onclick="handleUnapproveReturn(@item.ID)"><i class="fas fa-times" style="color: red"></i></a>
                                        </td>
                                        <td><input id="remark-@item.ID-return" class="remark remark-1 col-12" type="text" placeholder="Ghi chú..." /></td>
                                    }
                                    else
                                    {
                                        <td>@item.ReturnApprovedBy</td>
                                        <td>@item.ReturnApprovedDate</td>
                                        if (item.ReturnApprovedStatus == false)
                                        {
                                            <td><i class="fas fa-times" style="color: red" title="Không phê duyệt"></i></td>
                                        }
                                        else
                                        {
                                            <td><i class="fas fa-check-square" title="Đã phê duyệt"></i></td>
                                        }
                                        <td>@item.ReturnApprovedRemark</td>
                                    }
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <div style="text-align: center">
                    <label id="return-approve" class="btn top-space btn-sm btn-back" title="Trở lại" style="cursor: pointer; background: orange; color: white">
                        <i class="fas fa-arrow-left"></i>&nbsp; Trở lại
                    </label>
                </div>
            </div>
        </div>
    </div>
</section>
@section scripts{
    <script src="~/adminlte/js/jquery-confirm.js"></script>
    <script>
        $('#return-approve').on("click", () => {
            window.location.href = "/Order/Approve"
        })

        function handleAPI(url, data) {
            $.ajax({
                url,
                method: "POST",
                data,
                success: () => {
                    window.location.reload()
                },
                error: () => {
                    alert("Lỗi hệ thống!")
                }
            })
        }

        function handle(url, data) {
            $.ajax({
                url,
                method: "POST",
                data,
                success: () => {
                    window.location.reload()
                },
                error: () => {
                    alert("Lỗi hệ thống!")
                }
            })
        }

        function handleApproveBook(itemId) {
            var remarkId = "#" + "remark" + "-" + itemId + "-" + "book"
            handleAPI("/Order/BookingApprove", {
                id: $("#goOutID").val(),
                itemId,
                remark: $(remarkId).val(),
                status: true
            })
        }

        function handleUnapproveBook(itemId) {
            var remarkId = "#" + "remark" + "-" + itemId + "-" + "book"
            handleAPI("/Order/BookingApprove", {
                id: $("#goOutID").val(),
                itemId,
                remark: $(remarkId).val(),
                status: false
            })
        }

        function handleApproveReturn(itemId) {
            var remarkId = "#" + "remark" + "-" + itemId + "-" + "return"
            handleAPI("/Order/ReturnApprove", {
                id: $("#goOutID").val(),
                itemId,
                remark: $(remarkId).val(),
                status: true
            })
        }

        function handleUnapproveReturn(itemId) {
            var remarkId = "#" + "remark" + "-" + itemId + "-" + "return"
            handleAPI("/Order/ReturnApprove", {
                id: $("#goOutID").val(),
                itemId,
                remark: $(remarkId).val(),
                status: false
            })
        }

        $("#booking").removeClass('collapse');
        $("#booking").removeClass('collapsed');
        $("#approve").addClass('active');
        $("#li-booking").addClass('menu-open');
    </script>
}
/////////////////////////////////////////////////////////////////////////////////////////////////////Approve
@{
    ViewBag.Title = "Phòng ITT xác nhận mượn trả";
    Layout = "~/Views/Shared/_Layout.cshtml";
}

@section styles{
    <link href="~/adminlte/css/jquery-datatables.min.css" rel="stylesheet" />
    <link href="~/adminlte/css/jquery-confirm.css" rel="stylesheet" />
    <link href="~/adminlte/css/customize.css" rel="stylesheet" />
    <style>
        .content-wrapper > .content {
            padding: 0 0 !important;
        }

        #equip-table_info {
            margin-left: 10px;
        }

        #equip-table_paginate {
            margin-right: 10px;
        }

        #equip-table_filter {
            display: none;
        }

        .btn-delete:hover, .btn-edit:hover {
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
        }

        label {
            font-weight: 500 !important;
            font-size: 0.9rem;
        }

        #approve-table_filter {
            display: none;
        }
    </style>
}

<!--Table dữ liệu-->
<div class="content-wrapper" style="margin-left:0">
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="card">
                <!-- /.card-header -->
                <div class="card-body">
                    <div class="row" style="padding-bottom: 10px">
                        <div class="col-10"></div>
                        <div class="col-2 input-group input-group-sm">
                            <b><span class="no-margin-bottom" style="padding-top: 5px">Tìm kiếm chung</span></b>
                            &nbsp;
                            <input class="form-control bg-light to-date" type="text" id="search-all" autocomplete="off" />
                        </div>
                    </div>
                    <div style="overflow-x: auto; border: 1px solid #dee2e6 ">
                        <table id="equip-table" class="table table-bordered table-hover" style="width:100% !important">
                            <thead style="background:#17a2b8; color:white; text-align:center">
                                <tr>
                                    <th>ID</th>
                                    <th>Nhân viên</th>
                                    <th>Vị trí</th>
                                    <th>Phòng ban</th>
                                    <th>Lí do</th>
                                    <th>Chi tiết</th>
                                    <th>Ngày tạo</th>
                                    <th>Chỉnh sửa</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
                <div id="pagination" class="pagination"></div>
            </div>
        </div>
    </section>
</div>

@section scripts{
    <script src="~/adminlte/js/sortable.js"></script>
    <script src="~/adminlte/js/jquery-confirm.js"></script>
    <script src="~/adminlte/plugins/datatables/jquery.dataTables.min.js"></script>

    <script>
        var table = null;
        $(document).ready(() => {
            var options = {
                "serverSide": false,
                "searching": true,
                "orderCellsTop": true,
                "fixedHeader": true,
                "processing": true,
                "paging": true,
                "lengthChange": false,
                "oLanguage": {
                    "sLengthMenu": "_MENU_"
                },
                "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
                "pageLength": 10,
                "ajax": {
                    "type": "POST",
                    "url": "/Order/FetchApproveData",
                    "dataType": "json",
                    "contentType": 'application/json; charset=utf-8'
                },
                "columns": [
                    {
                        data: function (res) {
                            return `<span">${res.Team}</span>${res.ID}`;
                        }
                    },
                    {
                        data: function (res) {
                            return `<span class="border-right" style="padding-right:10px;">${res.EmpCode}</span><span style="margin-left:10px;">${res.FullName}</span>`;
                        }
                    },
                    { data: function (res) { return res.Position; } },
                    { data: function (res) { return res.Team; } },
                    { data: function (res) { return res.Reason; } },
                    {
                        data: function (res) {
                            var html = `<a href="/Order/ApproveDetail/${res.ID}" class="btn btn-edit">
                                            <i class="fas fa-question"></i>
                                        </a>`;
                            return html;
                        }
                    },
                    {
                        data: function (res) {
                            if (res.CreatedDate === null || res.CreatedDate === "" || typeof (res.CreatedDate) === "undefined")
                                return "";
                            var date = new Date(parseInt(res.CreatedDate.replace(/[^0-9 +]/g, '')));
                            var createdDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`;
                            return `<span class="border-right" style="padding-right:10px;">${res.CreatedBy}</span><span style="margin-left:10px;">${createdDate}</span>`;
                        }
                    },
                    {
                        data: function (res) {
                            if (res.ModifiedDate === null || res.ModifiedDate === "" || typeof (res.ModifiedDate) === "undefined")
                                return "";
                            var date = new Date(parseInt(res.ModifiedDate.replace(/[^0-9 +]/g, '')));
                            var modifiedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
                            return `<span class="border-right" style="padding-right:10px;">${res.ModifiedBy}</span ><span style="margin-left:10px;">${modifiedDate}</span>`;
                        }
                    }
                ]
            };
            var table = $('#equip-table').DataTable(options);

            $('#search-all').keyup(function () {
                table.search($(this).val()).draw();
            })
        });

        $("#booking").removeClass('collapse');
        $("#booking").removeClass('collapsed');
        $("#approve").addClass('active');
        $("#li-booking").addClass('menu-open');

        $('.datepicker, #date_from, #date_to').datepicker({
            dateFormat: 'dd/mm/yy'
        });
    </script>
    <script>
        $('#open-free-lap').on("click", (event) => {
            $("#tbl-free-lap").removeClass('collapse');
            $("#tbl-active-lap").addClass('collapse');
            $("#tbl-break-lap").addClass('collapse');
            $("#tbl-overdue-lap").addClass('collapse');
        });

        $('#open-active-lap').on("click", (event) => {
            $("#tbl-active-lap").removeClass('collapse');
            $("#tbl-free-lap").addClass('collapse');
            $("#tbl-break-lap").addClass('collapse');
            $("#tbl-overdue-lap").addClass('collapse');
        });

        $('#open-break-lap').on("click", (event) => {
            $("#tbl-break-lap").removeClass('collapse');
            $("#tbl-active-lap").addClass('collapse');
            $("#tbl-free-lap").addClass('collapse');
            $("#tbl-overdue-lap").addClass('collapse');
        });
    </script>
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
@using Assets.Web.Models

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="~/adminlte/plugins/fontawesome-free/css/all.min.css">
    <link href="~/adminlte/css/jquery-ui.css" rel="stylesheet" />
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Tempusdominus Bbootstrap 4 -->
    <link rel="stylesheet" href="~/adminlte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
    <!-- iCheck -->
    <link rel="stylesheet" href="~/adminlte/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
    <!-- JQVMap -->
    <link rel="stylesheet" href="~/adminlte/plugins/jqvmap/jqvmap.min.css">
    <!-- overlayScrollbars -->
    <link rel="stylesheet" href="~/adminlte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
    <!-- Daterange picker -->
    <link rel="stylesheet" href="~/adminlte/plugins/daterangepicker/daterangepicker.css">
    <!-- summernote -->
    <link rel="stylesheet" href="~/adminlte/plugins/summernote/summernote-bs4.css">
    <!-- Google Font: Source Sans Pro -->
    <link href="~/adminlte/css_custome/customize.css" rel="stylesheet" />
    <link href="~/adminlte/css_custome/font.css" rel="stylesheet" />

    <style>
        .active {
            background: #eaecf4;
            color: #72777A;
        }
    </style>

    <title>IT Assets Management</title>

    @RenderSection("styles", required: false)
    @Styles.Render("~/Content/css")
    @Scripts.Render("~/bundles/modernizr")
</head>

<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- SEARCH FORM -->
            <form class="form-inline ml-3">
                <div class="input-group input-group-sm">
                    <input class="form-control form-control-navbar" type="search" placeholder="Tìm kiếm" aria-label="Search">
                    <div class="input-group-append">
                        <button class="btn btn-navbar" type="submit">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>

            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
                <!-- Messages Dropdown Menu -->
                <li class="nav-item dropdown">
                    <a class="nav-link" data-toggle="dropdown" href="#">
                        <i class="far fa-comments" style="color: dodgerblue"></i>
                        <span class="badge badge-danger navbar-badge"></span>
                    </a>
                </li>
                <!-- Notifications Dropdown Menu -->
                <li class="nav-item dropdown">
                    <a class="nav-link" data-toggle="dropdown" href="#">
                        <i class="far fa-bell" style="color: dodgerblue"></i>
                        <span class="badge badge-warning navbar-badge"></span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="modal" data-target="#logoutModal" href="#" role="button" title="Đăng xuất">
                        <i class="fas fa-sign-out-alt" style="color: dodgerblue"></i>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.navbar -->
        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="@Url.Action("Index", "Home")" class="brand-link">
                <img src="~/adminlte/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                     style="opacity: .8">
                <span class="brand-text font-weight-light">IT Equipments System</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img id="img-profile" src="~/adminlte/pictures/@((User as Assets.Web.Models.CustomPrincipal).Id).jpg" class="img-circle elevation-2" alt="User Image">
                    </div>
                    <div class="info">
                        <a data-toggle="modal" data-target="#logoutModal" href="#" class="d-block">@((User as Assets.Web.Models.CustomPrincipal).FullName)</a>
                    </div>
                </div>

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        @if ((User as CustomPrincipal).PriorityRole == 2)
                        {
                            <li class="nav-header">QUẢN LÝ THIẾT BỊ</li>
                            <li class="nav-item has-treeview" id="li-computer">
                                <a href="#" class="nav-link" id="computer">
                                    <i class="nav-icon fas fa-th"></i>
                                    <p>
                                        Kho IT
                                        <i class="right fas fa-angle-left custome-angel"></i>
                                    </p>
                                </a>
                                <ul class="nav nav-treeview" style="padding: 0 10px">
                                    <li class="nav-item">
                                        <a href="/Asset/Index" class="nav-link" id="list-computer">
                                            <i class="fas fa-laptop-code nav-icon"></i>
                                            <p>Laptop</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/Asset/ListEquipment" class="nav-link" id="list-equip">
                                            <i class="fas fa-server nav-icon"></i>
                                            <p>Thiết bị khác</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        }
                        @if ((User as CustomPrincipal).PriorityRole >= 1)
                        {
                            <li class="nav-header">ĐĂNG KÝ THIẾT BỊ</li>
                            <li class="nav-item has-treeview" id="li-booking">
                                <a href="#" class="nav-link" id="booking">
                                    <i class="nav-icon fas fa-laptop-code"></i>
                                    <p>
                                        Laptop
                                        <i class="right fas fa-angle-left custome-angel"></i>
                                    </p>
                                </a>
                                <ul class="nav nav-treeview" style="padding: 0 10px">
                                    @if ((User as CustomPrincipal).PriorityRole == 2)
                                    {
                                        <li class="nav-item">
                                            <a href="/Order/Approve" class="nav-link" id="approve">
                                                <i class="fas fa-users nav-icon"></i>
                                                <p>Phê duyệt</p>
                                            </a>
                                        </li>
                                    }
                                    <li class="nav-item">
                                        <a href="/Order/Index" class="nav-link" id="list-booking">
                                            <i class="fas fa-list nav-icon"></i>
                                            <p>Danh sách đăng ký</p>
                                        </a>
                                    </li>
                                    @*<li class="nav-item has-treeview">
                                            <a href="#" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>
                                                    Level 2
                                                    <i class="right fas fa-angle-left"></i>
                                                </p>
                                            </a>
                                            <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">
                                                        <i class="far fa-dot-circle nav-icon"></i>
                                                        <p>Level 3</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">
                                                        <i class="far fa-dot-circle nav-icon"></i>
                                                        <p>Level 3</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">
                                                        <i class="far fa-dot-circle nav-icon"></i>
                                                        <p>Level 3</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>*@
                                </ul>
                            </li>
                        }
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header" style="padding-bottom:4px">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0 text-dark">@ViewBag.Title</h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                @if (@ViewContext.RouteData.Values["controller"].ToString() != "Home" ||
                                    @ViewContext.RouteData.Values["action"].ToString() != "Index")
                                {
                                    <li class="breadcrumb-item">
                                        @Html.ActionLink("Trang chủ", "Index", "Home")
                                    </li>
                                }
                            </ol>
                        </div>
                    </div>
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->
            <!-- Main content -->
            <div class="content">
                <div class="container-fluid">
                    @RenderBody()
                </div>
            </div>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->
        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
            <div class="p-3">
                <h5>Title</h5>
                <p>Sidebar content</p>
            </div>
        </aside>
        <!-- /.control-sidebar -->
        <!-- Main Footer -->
        <footer class="main-footer">
            <!-- To the right -->
            <div class="float-right d-none d-sm-inline">
                Anything you want
            </div>
            <!-- Default to the left -->
            <strong>Copyright &copy; 2020 <a href="https://autoway.hyundai.net">Trang chủ</a></strong>
        </footer>
    </div>
    <!-- ./wrapper -->
    <!-- REQUIRED SCRIPTS -->
    @Scripts.Render("~/bundles/jquery")
    @Scripts.Render("~/bundles/bootstrap")
    @Scripts.Render("~/adminlte/js")

    <script src="~/adminlte/js/jquery.js"></script>
    <script src="~/adminlte/js/jquery-ui.js"></script>
    <script src="~/adminlte/jquery/bootstrap.bundle.min.js"></script>
    <script src="~/adminlte/jquery/jquery.easing.min.js"></script>
    <script src="~/adminlte/js/sb-admin-2.min.js"></script>

    @RenderSection("scripts", required: false)

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Bạn có chắc chắn muốn thoát phiên đăng nhập?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" style="color:red">×</span>
                    </button>
                </div>
                <div class="modal-footer">
                    <a class="btn btn-primary btn-sm" href="@Url.Action("Index", "Login")">Đăng xuất</a>
                    <button class="btn btn-secondary btn-sm" type="button" data-dismiss="modal">Trở lại</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
/////////////////////////////////////////////////////////////////////////////////////////////////////Assset/Index

@{
    ViewBag.Title = "Danh sách máy";
    Layout = "~/Views/Shared/_Layout.cshtml";
}

@section styles{
    <link href="~/adminlte/css/jquery-datatables.min.css" rel="stylesheet" />
    <link href="~/adminlte/css/jquery-confirm.css" rel="stylesheet" />
    <link href="~/adminlte/css/customize.css" rel="stylesheet" />
    <style>
        .content-wrapper > .content {
            padding: 0 0 !important;
        }

        #equip-table_info {
            margin-left: 10px;
        }

        #equip-table_paginate {
            margin-right: 10px;
        }

        #equip-table_filter {
            display: none;
        }

        .btn-delete:hover, .btn-edit:hover {
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
        }
    </style>
}

<div class="content-wrapper" style="margin-left:0">
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="card">
                <!-- /.card-header -->
                <div class="card-body">
                    <div class="row" style="padding-bottom: 10px">
                        <div class="col-10">
                            <button id="btn-add" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#addModal">
                                <i class="fas fa-edit"></i> Thêm mới
                            </button>
                        </div>
                        <div class="col-2 input-group input-group-sm">
                            <b><span class="no-margin-bottom" style="padding-top: 5px">Tìm kiếm chung</span></b>
                            &nbsp;
                            <input class="form-control bg-light to-date" type="text" id="search-all" autocomplete="off" />
                        </div>
                    </div>
                    <div style="overflow-x: auto; border: 1px solid #dee2e6 ">
                        <table id="equip-table" class="table table-bordered table-hover" style="width:100% !important">
                            <thead style="background:#17a2b8; color:white; text-align:center">
                                <tr>
                                    <th>ID</th>
                                    <th>Tên máy</th>
                                    <th>Số seri</th>
                                    <th>Trạng thái máy</th>
                                    <th>Đang cho mượn</th>
                                    <th>Pin</th>
                                    <th>Chuột</th>
                                    <th>Sạc</th>
                                    <th>Thao tác</th>
                                    <th>Ngày tạo</th>
                                    <th>Chỉnh sửa</th>
                                </tr>
                            </thead>
                            <tbody id="tblData"></tbody>
                        </table>
                    </div>
                </div>
                <div id="pagination" class="pagination"></div>
            </div>
        </div>
    </section>

    <!-- Add Modal-->
    <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document" style="max-width:900px">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" style="font-weight: 900; color: dodgerblue" id="exampleModalLabel">Tạo mới thiết bị</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body form-horizontal">
                    <div class="col-12 row row-form form-group form-horizontal">
                        <div class="col-5 input-group input-group-sm">
                            <div class="col-4">
                                <span>Tên máy</span> <span class="red">(*)</span>
                            </div>
                            <div class="col-8 input-group-sm">
                                <input class="form-control" id="name" />
                            </div>
                        </div>
                        <div class="col-2 input-group input-group-sm"></div>
                        <div class="col-5 input-group input-group-sm">
                            <div class="col-4">
                                <span>Seri máy <span class="red">(*)</span></span>
                            </div>
                            <div class="col-8 input-group-sm">
                                <input class="form-control" id="serial" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12 row row-form form-group form-horizontal">
                        <div class="col-5 input-group input-group-sm">
                            <div class="col-5">
                                <span>Trạng thái máy</span> <span class="red">(*)</span>
                            </div>
                            <div class="col-7 input-group-sm">
                                <select class="form-control input-previous-button" id="status">
                                    <option value="1" selected>Tốt</option>
                                    <option value="0">Hỏng</option>
                                    <option value="2">Cần sửa chữa</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-2 input-group input-group-sm"></div>
                        <div class="col-5 row" style="margin-left:7px">
                            <div class="col-3 checkbox row">
                                <label class="container-guest col-4">
                                    <input type="checkbox" id="mouse" value="">
                                    <span class="checkmark"></span>
                                </label>
                                <span class="col-8 top-space">Chuột</span>
                            </div>
                            <div class="col-1"></div>
                            <div class="col-md-3 checkbox row">
                                <label class="container-guest col-4">
                                    <input type="checkbox" id="battery" value="">
                                    <span class="checkmark"></span>
                                </label>
                                <span class="col-8 top-space">Pin</span>
                            </div>
                            <div class="col-1"></div>
                            <div class="col-md-3 checkbox row">
                                <label class="container-guest col-4">
                                    <input type="checkbox" id="charger" value="">
                                    <span class="checkmark"></span>
                                </label>
                                <span class="col-8 top-space">Sạc</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a class="btn btn-primary btn-sm" id="btn-save" href="#"><i class="fas fa-edit"></i> Lưu</a>
                    <button class="btn btn-secondary btn-sm" type="button" data-dismiss="modal">Trở lại</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit Modal-->
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document" style="max-width:900px">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" style="font-weight: 900; color: dodgerblue" id="exampleModalLabel">Chỉnh sửa thiết bị</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body form-horizontal">
                    <div class="col-12 row row-form form-group form-horizontal">
                        <div class="col-5 input-group input-group-sm">
                            <div class="col-4">
                                <span>Tên máy</span> <span class="red">(*)</span>
                            </div>
                            <div class="col-8 input-group-sm">
                                <input class="form-control" id="edit-name" />
                            </div>
                        </div>
                        <div class="col-2 input-group input-group-sm"></div>
                        <div class="col-5 input-group input-group-sm">
                            <div class="col-4">
                                <span>Seri máy <span class="red">(*)</span></span>
                            </div>
                            <div class="col-8 input-group-sm">
                                <input class="form-control" id="edit-serial" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12 row row-form form-group form-horizontal">
                        <div class="col-5 input-group input-group-sm">
                            <div class="col-5">
                                <span>Trạng thái máy</span> <span class="red">(*)</span>
                            </div>
                            <div class="col-7 input-group-sm">
                                <select class="form-control input-previous-button" id="edit-status">
                                    <option value="1">Tốt</option>
                                    <option value="0">Hỏng</option>
                                    <option value="2">Cần sửa chữa</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-2 input-group input-group-sm"></div>
                        <div class="col-5 row" style="margin-left:7px">
                            <div class="col-3 checkbox row">
                                <label class="container-guest col-4">
                                    <input type="checkbox" id="edit-mouse" value="">
                                    <span class="checkmark"></span>
                                </label>
                                <span class="col-8 top-space">Chuột</span>
                            </div>
                            <div class="col-1"></div>
                            <div class="col-md-3 checkbox row">
                                <label class="container-guest col-4">
                                    <input type="checkbox" id="edit-battery" value="">
                                    <span class="checkmark"></span>
                                </label>
                                <span class="col-8 top-space">Pin</span>
                            </div>
                            <div class="col-1"></div>
                            <div class="col-md-3 checkbox row">
                                <label class="container-guest col-4">
                                    <input type="checkbox" id="edit-charger" value="">
                                    <span class="checkmark"></span>
                                </label>
                                <span class="col-8 top-space">Sạc</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a class="btn btn-primary btn-sm" id="btn-save-edit" href="#"><i class="fas fa-edit"></i> Lưu</a>
                    <button class="btn btn-secondary btn-sm" type="button" data-dismiss="modal">Trở lại</button>
                </div>
            </div>
        </div>
    </div>
</div>

@section scripts{
    <script src="~/adminlte/js/jquery-ui.js"></script>
    <script src="~/adminlte/js/jquery.min.js"></script>
    <script src="~/adminlte/js/jquery-confirm.js"></script>
    <script src="~/adminlte/plugins/datatables/jquery.dataTables.min.js"></script>

    <script>
        var table = null;
        $(document).ready(() => {
            var options = {
                "serverSide": false,
                "searching": true,
                "orderCellsTop": true,
                "fixedHeader": true,
                "processing": true,
                "paging": true,
                "oLanguage": {
                    "sLengthMenu": "_MENU_"
                },
                "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
                "pageLength": 15,
                "lengthChange": false,
                "ajax": {
                    "type": "POST",
                    "url": "/Asset/FetchData",
                    "dataType": "json",
                    "contentType": 'application/json; charset=utf-8',

                    "dataSrc": function (res) {
                        currentRole = res.currentRole;
                        return res.data;
                    }
                },
                "columns": [
                    {
                        data: function (res) {
                            html = `<span>${res.ID}</span>`
                            return html;
                        }
                    },
                    {
                        data: function (res) {
                            html = `<span>${res.Name}</span>`
                            return html;
                        }
                    },
                    {
                        data: function (res) {
                            html = `<span>${res.Serial}</span>`
                            return html;
                        }
                    },
                    {
                        data: function (res) {
                            html = '';
                            status = '';
                            if (res.Status == 1) {
                                status = 'Tốt'
                            } else if (res.Status == 0) {
                                status = 'Hỏng'
                            } else if (res.Status == 2) {
                                status = 'Cần sửa chữa'
                            }
                            html = `<span>${status}</span>`
                            return html;
                        }
                    },
                    {
                        data: function (res) {
                            isActive = '';
                            html = '';
                            if (res.IsActive == 0 || res.IsActive == null) {
                                isActive = ''
                            } else if (res.IsActive == 1) {
                                isActive = `<i class="fas fa-calendar-alt" style="color:orange"></i>`
                            }
                            html = `<span>${isActive}</span>`
                            return html;
                        }
                    },
                    {
                        data: function (res) {
                            html = '';
                            battery = '';
                            if (res.Battery == 1) {
                                battery = `<i class="fas fa-check-square" style="color:dodgeblue"></i>`
                            } else if (res.Battery == 0) {
                                battery = ''
                            }
                            html = `<span>${battery}</span>`
                            return html;
                        }
                    },
                    {
                        data: function (res) {
                            html = '';
                            mouse = '';
                            if (res.Mouse == 1) {
                                mouse = `<i class="fas fa-check-square" style="color:dodgeblue"></i>`
                            } else if (res.Mouse == 0) {
                                mouse = ''
                            }
                            html = `<span>${mouse}</span>`
                            return html;
                        }
                    },
                    {
                        data: function (res) {
                            html = '';
                            charger = '';
                            if (res.Charger == 1) {
                                charger = `<i class="fas fa-check-square" style="color:dodgeblue"></i>`
                            } else if (res.Charger == 0) {
                                charger = ''
                            }
                            html = `<span>${charger}</span>`
                            return html;
                        }
                    },
                    {
                        data: function (res) {

                            html = `<a class="btn btn-edit btn-sm btnEdit" title="Sửa" data-id=${res.ID} data-toggle="modal" data-target="#editModal">
                                                   <i class="icon far fa-edit" style="color:#4caf50"></i>
                                                </a>
                                                <a class="btn btn-delete btnDelete" onclick="Delete(${res.ID})" title="Xóa">
                                                   <i class="icon far fa-trash-alt" style="color: red; cursor: pointer"></i>
                                                </a>`;
                            return html;
                        }
                    },
                    {
                        data: function (res) {
                            if (res.CreatedDate === null || res.CreatedDate === "" || typeof (res.CreatedDate) === "undefined")
                                return '';
                            var date = new Date(parseInt(res.CreatedDate.replace(/[^0-9 +]/g, '')));
                            var createdDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`;
                            return `<span class="border-right" style="padding-right:10px;">${res.CreatedBy}</span><span style="margin-left:10px;">${createdDate}</span>`;
                        }
                    },
                    {
                        data: function (res) {
                            if (res.ModifiedDate === null || res.ModifiedDate === "" || typeof (res.ModifiedDate) === "undefined")
                                return "";
                            var date = new Date(parseInt(res.ModifiedDate.replace(/[^0-9 +]/g, '')));
                            var modifiedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
                            return `<span class="border-right" style="padding-right:10px;">${res.ModifiedBy}</span ><span style="margin-left:10px;">${modifiedDate}</span>`;
                        }
                    }
                ]
            };
            table = $('#equip-table').DataTable(options);

            $('#search-all').keyup(function () {
                table.search($(this).val()).draw();
            })
        });
    </script>

    <script>
        $('#btn-add').off('click').on('click', function () {
            clear();
        });

        $('.btnEdit').off('click').on('click', function () {
            var id = $(this).ID;
            LoadDetail(id);
        });

        $('#btn-save').on("click", (event) => {
            event.preventDefault();
            var obj = {};
            obj.Name = $('#name').val();
            obj.Serial = $('#serial').val();
            obj.Status = $('#status').val();
            obj.Mouse = $('#mouse').is(':checked') ? true : false;
            obj.Battery = $('#battery').is(':checked') ? true : false;
            obj.Charger = $('#charger').is(':checked') ? true : false;

            $.confirm({
                title: "Thông báo",
                content: function () {
                    var self = this;
                    return $.ajax({
                        url: "/Asset/Create",
                        method: "POST",
                        data: obj,
                        success: function (mess) {
                            if (mess === "Success") {
                                window.location.href = "/Asset/Index"
                            }
                            else {
                                self.setContent(mess);
                            }
                        }
                    })
                }
            })
        });

        $('#btn-save-edit').on("click", (event) => {
            event.preventDefault();
            var obj = {};
            obj.Name = $('#edit-name').val();
            obj.Serial = $('#edit-serial').val();
            obj.Status = $('#edit-status').val();
            obj.Mouse = $('#edit-mouse').is(':checked') ? true : false;
            obj.Battery = $('#edit-battery').is(':checked') ? true : false;
            obj.Charger = $('#edit-charger').is(':checked') ? true : false;

            $.confirm({
                title: "Thông báo",
                content: function () {
                    var self = this;
                    return $.ajax({
                        url: "/Asset/Edit",
                        method: "POST",
                        data: obj,
                        success: function (mess) {
                            if (mess === "Success") {
                                window.location.href = "/Asset/Index"
                            }
                            else {
                                self.setContent(mess);
                            }
                        }
                    })
                }
            })
        });

        function LoadDetail(id) {
            $.ajax({
                url: '/Asset/Detail',
                data: {
                    id: id
                },
                type: 'GET',
                dataType: 'json',
                success: function (respone) {
                    if (respone.status == true) {
                        var data = respone.data;
                        $('#edit-name').val(data.Name);
                        $('#edit-serial').val(data.Serial);
                        $('#edit-status').val(data.Status);
                        $('#edit-mouse').prop('checked', data.Mouse);
                        $('#edit-battery').prop('checked', data.Battery);
                        $('#edit-charger').prop('checked', data.Charger);
                    }
                    else {
                        alert(respone.message);
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            })
        }

        function Delete(id) {
            $.confirm({
                title: 'Xác nhận!',
                content: 'Bạn có chắc muốn xóa!',
                buttons: {
                    confirm: async function () {
                        await $.ajax({
                            url: "/Asset/Delete/" + id,
                            method: "GET",
                            success: function () {
                                window.location.reload();
                            }
                        })
                    },
                    cancel: function () {
                        //$.alert('Hủy bỏ!');
                    }
                }
            });
        }

        function clear() {
            $('#name').val('');
            $('#serial').val('');
            $('#mouse').prop('checked', false);
            $('#battery').prop('checked', false);
            $('#charger').prop('checked', false);
            $('#usb').prop('checked', false);
        }

        $("#computer").removeClass('collapse');
        $("#computer").removeClass('collapsed');
        $("#list-computer").addClass('active');
        $("#li-computer").addClass('menu-open');
    </script>
}
