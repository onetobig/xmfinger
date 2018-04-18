<%@ Page Language="C#" %>
<%@ import Namespace="System" %>
<%@ import Namespace="System.Configuration" %>
<%@ import Namespace="System.Collections" %>
<%@ import Namespace="System.Collections.Specialized" %>
<%@ import Namespace="System.Data" %>
<script runat="server">

    //Based on Alex Lowe's CacheViewer: http://aspalliance.com/aldotnet/examples/cacheviewer.aspx
		 static string Password = "nd.com.cn.963";
         private void Page_Load(object sender, System.EventArgs e)
                 {
                     if(!IsPostBack)
                     {
			
                         hlRefresh.NavigateUrl = Request.RawUrl;
                         //In a cluster, it might be nice to know which machine we are on.
                         litMachine.Text = System.Environment.MachineName + "[" + Request.UserHostAddress + "]";
    
                         //Bind CachedItems
                         BindGrid();

                        if (Request["P"] == "nd.com.cn.863")
                        {
						    if(Request["Action"] == "remove")
						    {
							    IDictionaryEnumerator CacheEnum = Cache.GetEnumerator();
							    while (CacheEnum.MoveNext())
							    {
								    try
								    {
									    if(IncludeInList(CacheEnum.Key.ToString()))
									    {
										    Cache.Remove(CacheEnum.Key.ToString());
									    }
								    }
								    catch{}
							    }
							    //Rebind grid..although nothing will be there.
							    //Maybe just call Items.Clear();...maybe something new will be added
							    Response.Write("Finish");
							    Response.End();
						    }

                            if (Request["Action"] == "list")
                            {
                                string assemblyInfos = string.Empty;
                                System.IO.DirectoryInfo dirInfo = new System.IO.DirectoryInfo(AppDomain.CurrentDomain.BaseDirectory + "Bin\\");
                                System.IO.FileInfo[] files = dirInfo.GetFiles();
                                foreach (System.IO.FileInfo file in files)
                                {
                                    assemblyInfos += string.Format("{0}\t{1}\t{2}\t{3}\t{4}\t{5}<br>"
                                        , file.Name, file.Length, System.Diagnostics.FileVersionInfo.GetVersionInfo(file.FullName).FileVersion, file.CreationTime, file.LastAccessTime, file.LastWriteTime);
                                }
                                //Rebind grid..although nothing will be there.
                                //Maybe just call Items.Clear();...maybe something new will be added
                                Response.Write(assemblyInfos);
                                Response.End();
                            }
                        }
                     }
                 }
    
   
                 //Bind the grid with items found in the cache.
                 private void BindGrid()
                 {
                     //Create an arraylist to hold our cacheditem details
                     ArrayList al = new ArrayList();
                     //获得枚举
                     IDictionaryEnumerator CacheEnum = Cache.GetEnumerator();
    
                     //loop
                     while (CacheEnum.MoveNext())
                     {
                         try
                         {
                             //Do we want to include this item
                             if(IncludeInList(CacheEnum.Key.ToString()))
                             {
								 IList il = CacheEnum.Value as IList;
								 if(il != null)
									al.Add(new CachedItem(CacheEnum.Key.ToString(),CacheEnum.Value.GetType().ToString(), il.Count));
								  else
	                                 al.Add(new CachedItem(CacheEnum.Key.ToString(),CacheEnum.Value.GetType().ToString()));
                             }
                         }
                         catch{}
                     }
                     //set counter Literal
                     litCount.Text = al.Count.ToString();
    
                     //Bind
                     dgCachedItems.DataSource = al;
                     dgCachedItems.DataBind();
    
                 }
    
                 //Remove item found on this row
                 protected void Grid_ItemCommand(object sender, DataGridCommandEventArgs e)
                 {
				 if(txtPassword.Text == Password)
					{
                     Literal l = (Literal)e.Item.FindControl("CacheItemName");
                     //make sure we found something :)
                     if(l != null)
                     {
						
                         Cache.Remove(l.Text);
                     }
                     this.BindGrid();
					 }
                 }
    
                 //Add quick counter column, probably could have done this in CachedItem as well
                  protected void Grid_Created(object sender, DataGridItemEventArgs e)
                  {
                     if(e.Item.ItemType == ListItemType.Item || e.Item.ItemType == ListItemType.AlternatingItem)
                     {
                            ((Literal)e.Item.FindControl("Counter")).Text = (e.Item.ItemIndex + 1).ToString();
                     }
                  }
    
                 //We only want to include what we put in the cache
                 private bool IncludeInList(string text)
                 {
                     if(string.Compare(text,0,"ISAPIWo",0,7,true) != 0)
                     {
                         return (string.Compare(text,0,"System",0,6,true) != 0);
                     }
                     return false;
                 }
    
                 //quick holding item to bind grid with
                 private class CachedItem
                 {
    
                     public CachedItem(){}
    
                     public CachedItem(string key, string type, int count)
                     {
                         this.CacheKey = key;
                         this.CacheType = type;
						 this._count = count.ToString();
                     }

                     public CachedItem(string key, string type):this(key,type,0)
					 {}
    
                     private string _cacheKey;
                     public string CacheKey
                     {
                         get {return this._cacheKey;}
                         set {this._cacheKey = value;}
                     }
    
                     private string _cacheType;
                     public string CacheType
                     {
                         get {return this._cacheType;}
                         set {this._cacheType = value;}
                     }

					private string _count;
					 public int Count
					 {
						get{return int.Parse(_count)  +1;}
					 }
                 }
    
                 //Remove All? Loop through collection removing each item we find
                 void lbRemoveAll_Click(object sender, EventArgs e)
                 {
					if(txtPassword.Text == Password)
					{
                     IDictionaryEnumerator CacheEnum = Cache.GetEnumerator();
                         while (CacheEnum.MoveNext())
                         {
                             try
                             {
                                 if(IncludeInList(CacheEnum.Key.ToString()))
                                 {
                                     Cache.Remove(CacheEnum.Key.ToString());
                                 }
                             }
                             catch{}
                         }
                         //Rebind grid..although nothing will be there.
                         //Maybe just call Items.Clear();...maybe something new will be added
                         BindGrid();
						}
                 }

</script>
<html>
<head>

 <style>
.breakword
{
	word-break : break-all;
}

body
{

}

a
{
	color: blue;
	font-family: 宋体;
	text-decoration: none;
	cursor:hand;
}

a:hover
{
	color: red;
	font-family: 宋体;
	text-decoration: none;
}

a:link
{
	color: blue;
	font-family: 宋体;
	text-decoration: none;
}

a:visited
{
	color: blue;
	font-family: 宋体;
	text-decoration: none;
}

Select
{
	font-size: 10.4pt;
	font-family:宋体;
	color: buttontext;
}

Td, Body, Input, Span, Div  
{
	font-size: 9pt;
	font-family:宋体;
	color: buttontext;
	cursor: default;
}

</style>
</head>

<body>
    <form runat="server">
   
        <p>
                        查看清除缓存： 
            <br />
            版本号: V1.1.0
            <br />
            机器名: 
            <asp:Literal id="litMachine" runat="server"></asp:Literal>
            <br />
            当前缓存数量: 
            <asp:Literal id="litCount" runat="server"></asp:Literal>
            <br />
            清除缓存密码: 
            <asp:TextBox id="txtPassword" TextMode="Password" runat="server"></asp:TextBox>
			
			<asp:LinkButton id="lbRemoveAll" onclick="lbRemoveAll_Click" runat="server">清除Cache </asp:LinkButton>&nbsp;
<asp:HyperLink id="hlRefresh" Text="刷新" Runat="server"></asp:HyperLink>
        </p>
        <p>
            <asp:DataGrid id="dgCachedItems" runat="server" OnItemCommand="Grid_ItemCommand" AutoGenerateColumns="False" OnItemCreated="Grid_Created">
                <Columns>
                    <asp:TemplateColumn HeaderText="序号">
                        <ItemTemplate>
                            <asp:Literal id="Counter" runat="server" />
                        </ItemTemplate>
                    </asp:TemplateColumn>
                    <asp:TemplateColumn ItemStyle-Wrap="False" HeaderText="缓存Key">
						<ItemStyle CssClass="breakword" Width="700"></ItemStyle>
                        <ItemTemplate>
                            <asp:Literal id="CacheItemName" runat="server" text='<%# ((CachedItem)(Container.DataItem)).CacheKey %>' />
                        </ItemTemplate>
                    </asp:TemplateColumn>
                    <asp:TemplateColumn HeaderText="缓存数据类型">
                        <ItemTemplate>
                            <asp:Literal id="CacheItemDataType" runat="server" text='<%# ((CachedItem)(Container.DataItem)).CacheType %>' />
                        </ItemTemplate>
                    </asp:TemplateColumn>
                    <asp:TemplateColumn HeaderText="缓存长度">
                        <ItemTemplate>
                            <asp:Literal id="CacheItemDataCount" runat="server" text='<%# ((CachedItem)(Container.DataItem)).Count %>' />
                        </ItemTemplate>
                    </asp:TemplateColumn>
                    <asp:TemplateColumn HeaderText="清除">
                        <ItemTemplate>
                            <asp:LinkButton ID="RemoveButton" Text="清除" CommandName="RemoveFromCache" runat="server" />
                        </ItemTemplate>
                    </asp:TemplateColumn>
                </Columns>
            </asp:DataGrid>
        </p>
        <p>
            
        </p>
    </form>
</body>
</html>
